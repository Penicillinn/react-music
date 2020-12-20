import React,{ memo } from 'react';
import { useCallback,useMemo } from 'react';
import ComButton from './com-button';
import { useState } from 'react';

const HooksTest = () => {
    //state
    const [ count,setCount ] = useState(0);
    //redux hooks

    //hooks
    const testFunc = useCallback(() => {
        return console.log(111);
    },[])
    const computedCount = useMemo(() => {
        return count * 2;
    }, [count]);
    //其他业务逻辑
    // const testFunc2 = () => {
    //     return console.log(2222);
    // }
    return(
        <div>
            <h1>{ count + '----'+ computedCount}</h1>
            <button onClick={() => setCount(count + 1) }>test</button>
            <ComButton testFunc={testFunc}/>
        </div>
    )
}

export default memo(HooksTest);