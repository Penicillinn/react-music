import React from 'react';
import { NavLink } from 'react-router-dom';
import { headerLinks } from '@/common/local-data';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { HeaderWrp,HeaderLeft,HeaderRight } from './style';

const Header = (props) => {

    const showSelectItem = (item,index) => {
        if(index < 3) {
            return (
                <NavLink to={item.link}>
                    {item.title}
                    <i className='icon sprite_01'></i>
                </NavLink>
            )
        }else {
            return <a href={item.link}>{item.title}</a>
        }
    }
    
    return (
        <HeaderWrp>
            <div className="content wrap-v1">
                <HeaderLeft>
                    <a href="/#" className="logo sprite_01">网易云音乐</a>
                    <div className="header-select">
                        {
                            headerLinks.map((item,index) => {
                                return (
                                    <div key={item.title} className="select-item">
                                        {showSelectItem(item,index)}
                                    </div>
                                )
                            })
                        }
                    </div>
                </HeaderLeft>
                <HeaderRight>
                    <Input 
                        placeholder="音乐/视频/电台/用户" 
                        className="search" 
                        prefix={<SearchOutlined />} 
                    />
                    <div className="center">创作者中心</div>
                    <span>登录</span>
                </HeaderRight>
            </div>
            <div className="divide"></div>
        </HeaderWrp>
    )
}

export default Header;