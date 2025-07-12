import type { DefineComponent } from 'vue'
import { JSX } from 'vue/jsx-runtime'

export type Component = JSX.Element
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type RenderComponent = DefineComponent<any, any, any, any, any>
export type RenderFunction<T extends object> = (props: T) => JSX.Element

/** Returns the type of an element from an array */
export type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType extends readonly (infer ElementType)[]
  ? ElementType
  : never

/** Returns the keys of the object where the value matches the Value type. */
export type KeysMatching<Object extends object, Value> = {
  [K in keyof Object]-?: Object[K] extends Value ? K : never
}[keyof Object]
