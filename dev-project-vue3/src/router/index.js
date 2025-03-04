import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            name: 'basic',
            path: '/basic',
            component: () => import('../pages/basic')
        },
        {
            name: 'events',
            path: '/events',
            component: () => import('../pages/events')
        },
        {
            name: 'slots',
            path: '/slots',
            component: () => import('../pages/slots')
        },
        {
            name: 'context',
            path: '/context',
            component: () => import('../pages/context')
        },
        {
            name: 'routerView',
            path: '/routerView',
            component: () => import('../pages/routerView'),
            children: [
                {
                    name: 'routerViewSub',
                    path: '',
                    component: () => import('../pages/routerView/Sub')
                }
            ]
        },
        {
            name: 'lazyReactInVue',
            path: '/lazyReactInVue',
            component: () => import('../pages/lazyReactInVue')
        },
        {
            name: 'injection',
            path: '/useInjectPropsFromWrapper',
            component: () => import('../pages/useInjectPropsFromWrapper')
        },
        {
            name: 'crossingProvider',
            path: '/crossingProvider',
            component: () => import('../pages/crossProvider')
        },
        {
            name: 'introduce',
            path: '/:default(.*)',
            component: () => import('../pages/introduce')
        },
    ],
})
