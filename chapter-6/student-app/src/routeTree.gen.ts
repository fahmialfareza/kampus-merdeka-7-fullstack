/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const RegisterLazyImport = createFileRoute('/register')()
const ProfileLazyImport = createFileRoute('/profile')()
const LoginLazyImport = createFileRoute('/login')()
const IndexLazyImport = createFileRoute('/')()
const StudentsCreateLazyImport = createFileRoute('/students/create')()
const StudentsIdLazyImport = createFileRoute('/students/$id')()

// Create/Update Routes

const RegisterLazyRoute = RegisterLazyImport.update({
  id: '/register',
  path: '/register',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/register.lazy').then((d) => d.Route))

const ProfileLazyRoute = ProfileLazyImport.update({
  id: '/profile',
  path: '/profile',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/profile.lazy').then((d) => d.Route))

const LoginLazyRoute = LoginLazyImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/login.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const StudentsCreateLazyRoute = StudentsCreateLazyImport.update({
  id: '/students/create',
  path: '/students/create',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/students/create.lazy').then((d) => d.Route),
)

const StudentsIdLazyRoute = StudentsIdLazyImport.update({
  id: '/students/$id',
  path: '/students/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/students/$id.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginLazyImport
      parentRoute: typeof rootRoute
    }
    '/profile': {
      id: '/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProfileLazyImport
      parentRoute: typeof rootRoute
    }
    '/register': {
      id: '/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof RegisterLazyImport
      parentRoute: typeof rootRoute
    }
    '/students/$id': {
      id: '/students/$id'
      path: '/students/$id'
      fullPath: '/students/$id'
      preLoaderRoute: typeof StudentsIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/students/create': {
      id: '/students/create'
      path: '/students/create'
      fullPath: '/students/create'
      preLoaderRoute: typeof StudentsCreateLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/login': typeof LoginLazyRoute
  '/profile': typeof ProfileLazyRoute
  '/register': typeof RegisterLazyRoute
  '/students/$id': typeof StudentsIdLazyRoute
  '/students/create': typeof StudentsCreateLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/login': typeof LoginLazyRoute
  '/profile': typeof ProfileLazyRoute
  '/register': typeof RegisterLazyRoute
  '/students/$id': typeof StudentsIdLazyRoute
  '/students/create': typeof StudentsCreateLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/login': typeof LoginLazyRoute
  '/profile': typeof ProfileLazyRoute
  '/register': typeof RegisterLazyRoute
  '/students/$id': typeof StudentsIdLazyRoute
  '/students/create': typeof StudentsCreateLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/login'
    | '/profile'
    | '/register'
    | '/students/$id'
    | '/students/create'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/login'
    | '/profile'
    | '/register'
    | '/students/$id'
    | '/students/create'
  id:
    | '__root__'
    | '/'
    | '/login'
    | '/profile'
    | '/register'
    | '/students/$id'
    | '/students/create'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  LoginLazyRoute: typeof LoginLazyRoute
  ProfileLazyRoute: typeof ProfileLazyRoute
  RegisterLazyRoute: typeof RegisterLazyRoute
  StudentsIdLazyRoute: typeof StudentsIdLazyRoute
  StudentsCreateLazyRoute: typeof StudentsCreateLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  LoginLazyRoute: LoginLazyRoute,
  ProfileLazyRoute: ProfileLazyRoute,
  RegisterLazyRoute: RegisterLazyRoute,
  StudentsIdLazyRoute: StudentsIdLazyRoute,
  StudentsCreateLazyRoute: StudentsCreateLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.jsx",
      "children": [
        "/",
        "/login",
        "/profile",
        "/register",
        "/students/$id",
        "/students/create"
      ]
    },
    "/": {
      "filePath": "index.lazy.jsx"
    },
    "/login": {
      "filePath": "login.lazy.jsx"
    },
    "/profile": {
      "filePath": "profile.lazy.jsx"
    },
    "/register": {
      "filePath": "register.lazy.jsx"
    },
    "/students/$id": {
      "filePath": "students/$id.lazy.jsx"
    },
    "/students/create": {
      "filePath": "students/create.lazy.jsx"
    }
  }
}
ROUTE_MANIFEST_END */
