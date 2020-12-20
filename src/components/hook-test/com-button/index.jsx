import React,{ memo } from 'react';

const ComButton = (props) => {
    //state

    //redux hooks

    //hooks

    //其他业务逻辑
    console.log('子组件重新渲染了');
    props.testFunc();
    return(
        <div>
            <h1>button子组件</h1>
        </div>
    )
}

export default memo(ComButton);