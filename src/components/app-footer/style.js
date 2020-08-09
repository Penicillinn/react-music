import styled from 'styled-components';

export const FooterWrap = styled.div`
    height: 172px;
    background-color: #f2f2f2;
    border-top: 1px solid #d3d3d3;;
    color: #666;

    .content {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
`

export const FooterLeft = styled.div`
    padding-top: 10px;
    font-size: 12px;
    line-height: 24px;
    .links {
        display: flex;
        align-items: center;
        color: #ccc;
        a {
            &:hover {
                text-decoration: underline;
                color: #ccc;
            }
        }
        .divide {
            display: inline-block;
            margin: 0 10px;
            width: 1px;
            height: 14px;
            background-color: #ccc
        }
    }
    .copyright,.report,.info {
        span {
          margin-right: 15px;
        }
        a {
            color: #666;
            &:hover {
                text-decoration: underline;
                color: #666;
            }
        }
    }
    
`

export const FooterRight = styled.div`
    display: flex;
    
    .item {
        margin-right: 40px;
        .link {
            display: block;
            width: 50px;
            height: 45px;
            background-size: 110px 450px;
        }
        :nth-child(1) .link {
            background-position: -60px -101px;
        }
        :nth-child(2) .link {
            background-position: 0 0;
        }
        :nth-child(3) .link {
            background-position: -60px -50px;
        }
        :nth-child(4) .link {
            background-position: 0 -101px;
        }

        .item-bgc {
            display: block;
            width: 52px;
            height: 10px;
            margin-top: 5px;
            background-size: 180px 100px
        }
        :nth-child(1) .item-bgc {
            background-position: -1px -90px;
          }
          :nth-child(2) .item-bgc {
            background-position: 0 0;
            margin-top: 7px;
          }
          :nth-child(3) .item-bgc {
            background-position: 0 -54px;
            margin-top: 6px;
          }
      
          :nth-child(4) .item-bgc {
            background-position: -1px -72px;
            margin-top: 6px;
          }
    }
`