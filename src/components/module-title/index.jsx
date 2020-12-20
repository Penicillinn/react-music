import React,{ memo } from 'react';

import { ModuleWrp,TitleLeft,TitleRight } from './style';

const ModuleTitle = (props) => {
    const { title,keyWords = [] } = props;
    return(
        <ModuleWrp className="sprite_02">
            <TitleLeft>
                <h3 className="title">{ title }</h3>
                {
                    keyWords && (
                        <div className="key-list">
                            {
                                keyWords.map(item => {
                                    return (
                                        <div className="key-item" key={item}>
                                            <a href="/#">{ item }</a>
                                            <span className="divider">|</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                }
                
            </TitleLeft>
            <TitleRight>
                <a href="/#">更多</a>
                <i className="icon sprite_02"></i>
            </TitleRight>
        </ModuleWrp>
    )
}

export default memo(ModuleTitle);