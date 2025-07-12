# inTakevms UI

Project user interface inTakevms UI

## Installation
*To install and run, you need to have Node.js v20 or higher installed*

**Installation procedure**
1. __Install required packages__

To do this, run the installation command:
```sh
pnpm install
```

2. __Create and configure `.env` file__

File `.env` must be located at the root of the project

You can create a copy `.env.example`

You must specify the server API URL in the field `VITE_DEV_API_BASE_URL`

## Launch

__Run in development mode__
```sh
pnpm dev
```

## Assembly
__Build with type checking and eslint check__

Also performs type checking `pnpm type-check` and static code analysis `pnpm lint`

```sh
pnpm build
```
*If there are type errors or eslint warnings, the build will fail.*

__Build without type checking and eslint checking__


```sh
pnpm build-only
```
*Not recommended for use without a specific reason.*


### Type checking
```sh
pnpm type-check
```

### Static code analysis
```sh
pnpm lint
```

### API Type Generation
The package is used to generate API types. `@openapitools/openapi-generator-cli`

To update API types, you need to make sure that `.env` file in the field `GENERATE_API_SCHEMA_URL` specified the correct JSON URL to the file `openapi.json`, which produces Swagger

Next run the command
```sh
pnpm generate-api
```


### Description of the project structure 
*(folder src)*

`api` - API, axios configuration, generated API types

`assets` - Font files, css

`components` - shared component library

`helpers` - auxiliary functions

`locales` - localization files

`modules` - application components broken down into modules

`router` - router application

`store` - app store, actions, mutations, state

`theme` - application color theme configuration files

`types` - global descriptions of some types
