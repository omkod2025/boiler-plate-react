// Single source of truth for pages. Each `load` is a dynamic import, so every
// page becomes its own chunk. The router and the navbar share these functions,
// so a hover preload and a real navigation fetch the same chunk.
export const routes = {
  home: {
    path: '/',
    label: 'Home',
    load: () => import('@/pages/Home/HomePage'),
  },
  about: {
    path: '/about',
    label: 'About',
    load: () => import('@/pages/About/AboutPage'),
  },
} as const

export type RouteKey = keyof typeof routes

export const navRoutes: readonly RouteKey[] = ['home', 'about']
