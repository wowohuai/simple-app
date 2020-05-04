import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { 
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchWrapper,
  Addition,
  Button
} from './style'

import { actionCreators } from './store'

const Header = ({ focused, handleInputFocus, handleInputBlur}) => {
  return (<HeaderWrapper>
    <Logo />
    <Nav>
      <NavItem className="left active" href="/">首页</NavItem>
      <NavItem className="left" href="https://www.jianshu.com/">下载App</NavItem>
      <NavItem className="right">登录</NavItem>
      <NavItem className="right">
        <i className="iconfont">&#xe636;</i>
      </NavItem>
      <SearchWrapper >
        <CSSTransition
          in={focused}
          timeout={400}
          classNames="slide"
        >
          <NavSearch
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </CSSTransition>
        <i className={focused ? 'iconfont focused' : 'iconfont'}>&#xe60d;</i>
      </SearchWrapper>

    </Nav>
    <Addition>
      <Button className="write" color="red">
        <i className="iconfont">&#xe6e5;</i>&nbsp;写文章
            </Button>
      <Button className="register">注册</Button>
    </Addition>
  </HeaderWrapper>
  )
}
const mapStateToProps = (state) => {
  return {
    focused: state.header.focused
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.setInputFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.setInputBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header)