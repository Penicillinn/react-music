import React,{useEffect } from 'react';
import { connect,useDispatch }from 'react-redux';

import { RecommendAction } from '@store/recommend'
/* eslint-disable */
const Recommend = (props) => {
    const dispath = useDispatch();
    useEffect(() => {
        const { getTopBanner } = props;
        getTopBanner();
    },[dispath])

    return (
        <div>
            <h1>Recommend: { props.bannerList.length }</h1>
        </div>
    )
}

export default connect(state => ({ bannerList: state.RecommendReducer.bannerList }),RecommendAction)(Recommend);