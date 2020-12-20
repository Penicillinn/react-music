import React,{ memo,useEffect } from 'react';
import { useDispatch,useSelector, shallowEqual }  from 'react-redux';

import ModuleTitle from '@components/module-title';
import { RecommendAction } from '@/store/recommend';

import {
    HotRecommendWrapper
}  from './style';

const keyWords = ['华语', '流行', '民谣', '摇滚', '电子' ]

const HotRecommend = () => {
    //state

    //redux-hooks
    const dispatch = useDispatch();
    const { hotRecommendList } = useSelector(state => ({
        hotRecommendList: state.RecommendReducer.hotRecommendList
    }),shallowEqual)

    //hooks
    useEffect(() => {
        dispatch(RecommendAction.getHotRecommendAction());
    }, [dispatch])

    //其他逻辑

    return(
        <div>
            <ModuleTitle title='热门推荐' keyWords={ keyWords }/>
            <HotRecommendWrapper>
                <div>
                    {
                        hotRecommendList.map(item => item.name)
                    }
                </div>
            </HotRecommendWrapper>
        </div>
    )
}

export default memo(HotRecommend);