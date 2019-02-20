'use strict';

import { Home, About, NotFound } from '@/components';

export default
    [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/home',
            redirect: {
                name: 'home'
            }
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        { path: '(.*)', component: NotFound }
    ]