import { AxiosError } from 'axios'
import { minutesToMilliseconds } from 'date-fns'

import { AppActionTypes, store } from '@/store'
import { extractErrorSnackbarProps } from '@helpers'
import { useSnackbar } from '@/components/Snackbar'

import { axiosInstance } from '../axios'

let refreshPromise: Promise<boolean> | undefined

/** Checks if the token has expired */
const checkExpiresToken = (token?: string) => {
  if (!token || token === 'null') return true
  const expires = JSON.parse(window.atob(token.split('.')[1])).exp * 1000
  return expires - Date.now() < 0
}

/** Checks the remaining token validity, if the validity is less than 5 minutes, then refreshes the tokens */
const checkAndRefreshToken = async (token?: string) => {
  if (!token || token === 'null' || refreshPromise) return

  const expires = JSON.parse(window.atob(token.split('.')[1])).exp * 1000
  const isCloseToExpiration = expires - Date.now() < minutesToMilliseconds(5) // 5 min
  if (!isCloseToExpiration) return
  return refreshToken()
}

/** Requests and refreshes tokens */
const refreshToken = async () => {
  if (!refreshPromise) refreshPromise = store.dispatch(AppActionTypes.REFRESH, undefined)
  const isRefreshSuccess = await refreshPromise
  refreshPromise = undefined

  return isRefreshSuccess
}

axiosInstance.interceptors.request.use(
  req => {
    /** Processing any request
     * Background check of token validity period, token update if necessary */
    if (!req.url?.includes('/auth/refresh')) checkAndRefreshToken(`${req.headers.Authorization}`?.split(' ')[1])
    return req
  },
  err => err
)

axiosInstance.interceptors.response.use(
  res => res,
  async (err: AxiosError<{ message: string }>) => {
    /** Handling Token Refresh Request Error */
    if (err.response?.config.url?.includes('/auth/refresh')) {
      if (
        !store.state.app.auth.token ||
        (err.response?.data as { detail?: string })?.detail === 'Invalid refresh token' ||
        checkExpiresToken(store.state.app.auth.token)
      )
        store.dispatch(AppActionTypes.LOGOUT, undefined)

      throw new AxiosError(err.message, err.code, err.config, err.request, err.response)
    }

    /** Handling any request error due to invalid access token
     * If the token is successfully refreshed, the original request is repeated. */
    if (err.response?.status === 401) {
      const isRefreshSuccess = await refreshToken()
      if (!isRefreshSuccess) return err
      const config = {
        ...err.config,
        headers: { ...err.config?.headers, Authorization: axiosInstance.defaults.headers.Authorization },
      }
      return axiosInstance(config)
    }

    /** Handling all errors except GET and OPTIONS requests */
    if (!['get', 'options'].includes(`${err.config?.method?.toLowerCase()}`))
      useSnackbar().openSnackbar(extractErrorSnackbarProps(err))

    throw new AxiosError(err.message, err.code, err.config, err.request, err.response)
  }
)
