import  styled from 'styled-components'
import logoPic from '@/static/img/logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  line-height: 56px;
  background-color: #fff;
  box-sizing: border-box;
  border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  height:56px;
  display: block;
  width: 100px;
  top: 0;
  left: 0;
  background: url(${logoPic}) no-repeat 100% 100%/contain ;
`

export const Nav = styled.div`
  min-width: 460px;
  padding-left: 100px;
  box-sizing: border-box;
  height: 100%;
  margin: 0 200px 0 100px;
` 

export const NavItem = styled.a.attrs((props) =>({
  href: props.href
}))`
  display: block;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
    color: #969696;
  } 
  &.right {
    float: right;
  }
  &.active{
    color: #ea6f5a;
  }
`


export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  margin-top: 9px;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  padding: 0 35px 0 20px;
  box-sizing: border-box;
  color: #333;
  &::placeholder {
    color: #999;
  }
  &.slide-enter{
    transition: all .4s ease-out;
  }
  &.slide-enter-active {
    width: 220px;
  }
  &.slide-enter-done {
    width: 220px;
  }
  &.slide-exit{
    transition: all .4s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
  // transition: width .5s;
`

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  margin-left: 20px;
  .iconfont {
    position: absolute;
    width: 30px;
    height:30px;
    text-align:center;
    line-height: 30px;
    border-radius: 50%;
    right: 5px;
    top:15px;
    &.focused {
      color: #fff;
      background-color: #969696;
    }
  }
  
`

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 250px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  border-radius: 2px;
  padding: 5px;
  color: #999;
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-bottom-color: #fff;
    left: 20px;
    bottom: 99%;
  }
`

export const SearchInfoTitle = styled.div`
  margin: 5px 0 15px 5px;
  font-size: 14px;
  line-height: 20px;
  position: relative;
  cursor:pointer;
  .iconfont.spin {
    position: absolute;
    top: -4px;
    right:34px;
    line-height: 30px;
    transition: all .4s ease-in;
    //设置旋转中心
    transform-origin: center;
  }
`

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 12px;
  line-height: 20px;
`
export const SearchInfoItemWrapper = styled.div`
  overflow: hidden;
`
export const SearchInfoItem = styled.a`
  padding: 2px 8px;
  margin:5px 5px;
  line-height: 20px;
  float: left;
  display: block;
  font-size: 12px;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);

`

export const SerachInfoHistory = styled.a`
  margin:10px 5px;
  padding: 2px 6px 2px 40px;
  display: block;
  line-height: 30px;
  &:hover{
    background: #f0f0f0;
    border-radius: 3px;
  }
  position: relative;
  .iconfont {
    position: absolute;
  }
  .iconfont.history{
    top: 2px;
    left: 0;
  }
  .iconfont.delete{
    right: 0;
    top: 2px;
    cursor: pointer;
  }
`

export const SerachInfoHistoryWrapper = styled.div`

`

export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  height: 56px;
`

export const Button = styled.div`
  float: right;
  width: 80px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  margin: 9px 5px 0 15px;
  border-radius: 20px;
  font-size: 15px;
  box-sizing: border-box;
  &.register {
    color: #ea6f5a;
    border: 1px solid rgba(236,97,73,.7);
    background-color: transparent;
  }
  &.write {
    color: #fff;
    background-color: #ea6f5a
  }
`

