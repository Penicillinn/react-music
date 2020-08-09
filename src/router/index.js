import React from 'react';
import { Redirect } from 'react-router-dom';

import Discover from '@pages/discover';
import Recommend from '@pages/discover/c-pages/recommend';
import Ranking from '@pages/discover/c-pages/ranking';
import Songs from '@pages/discover/c-pages/songs';
import Radios from '@pages/discover/c-pages/radios';
import Artist from '@pages/discover/c-pages/artist';
import Album from '@pages/discover/c-pages/album';

const routes = [
    {
        path: '/',
        exact: true,
        render: () => {
           return <Redirect to='/discover' />
        }
    },
    {
        path: '/discover',
        component: Discover,
        routes: [
            {
                path: '/discover',
                exact: true,
                render: () => <Redirect to='/discover/recommend' />
            },
            {
                path: '/discover/recommend',
                exact: true,
                component: Recommend
            },
            {
                path: '/discover/ranking',
                component: Ranking
            },
            {
                path: '/discover/songs',
                component: Songs
            },
            {
                path: '/discover/djradio',
                component: Radios
            },
            {
                path: '/discover/artist',
                component: Artist
            },
            {
                path: '/discover/album',
                component: Album
            },
        ]
    }
]

export default routes;