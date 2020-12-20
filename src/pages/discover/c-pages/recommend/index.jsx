import React, { memo } from 'react';

import TopBanners from './c-cpns/top-banners';
import HotRecommend from './c-cpns/hot-recommend';
import NewAblums from './c-cpns/new-albums';

import {
    RecommendContent,
    RecommendLeft,
    RecommendRight
}from './style';


const Recommend = () => {
    return(
        <div>
            <TopBanners />
            <RecommendContent className="wrap-v2">
                <RecommendLeft>
                    <HotRecommend />
                    <NewAblums />
                </RecommendLeft>
                <RecommendRight></RecommendRight>
            </RecommendContent>
        </div>
    )
}

export default memo(Recommend);