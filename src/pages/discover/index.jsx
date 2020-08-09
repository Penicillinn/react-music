import React from 'react';
import { renderRoutes } from 'react-router-config';
import { NavLink } from 'react-router-dom';
import { RecommedTop,RecommendList } from './style';
import {  dicoverMenu } from '../../common/local-data';
const Discover = (props) => {
    const { route } = props
    return (
        <div>
            <RecommedTop>
                <RecommendList className='wrap-v1'>
                    {
                       dicoverMenu.map(item => {
                           return (
                               <div key={item.title} className='recommend-item'>
                                   <NavLink to={item.link}>{item.title}</NavLink>
                               </div>
                           )
                       }) 
                    }
                </RecommendList>
            </RecommedTop>
            {
                renderRoutes(route.routes)
            }
        </div>
    )
}

export default Discover;