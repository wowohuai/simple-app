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
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoItemWrapper,
  SerachInfoHistoryWrapper,
  SerachInfoHistory,
  Addition,
  Button
} from './style'

import { actionCreators } from './store'

const getListArea = (searchItem, searchHistory, handleDeleteHistoryItem, show) => {
  if(show) {
    return (
      <SearchInfo>
        <SearchInfoTitle>
          热门搜索
            <SearchInfoSwitch>
             换一批
            </SearchInfoSwitch>
          <i className="iconfont">&#xe67b;</i>
        </SearchInfoTitle>
        <SearchInfoItemWrapper>
          {
            searchItem.map((item, index) => {
              return (
                <SearchInfoItem key={item}>{item}</SearchInfoItem>
              )
            })
          }
        </SearchInfoItemWrapper>
        <SerachInfoHistoryWrapper>
          {
            searchHistory.map((item,index) => {
              return (
                <SerachInfoHistory key={item}>
                  <i className="iconfont history">&#xe675;</i>
                  <i className="iconfont delete" onClick={(e) => {
                    handleDeleteHistoryItem(index, e)}
                    }>&#xe6ae;</i>
                  {item}
                </SerachInfoHistory>
              )
            })
          }
        </SerachInfoHistoryWrapper>
      </SearchInfo>
    )
  }
  return null
}


const Header = ({ focused, searchItem, searchHistory, handleInputFocus, handleInputBlur, handleDeleteHistoryItem}) => {
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
        {getListArea(searchItem, searchHistory, handleDeleteHistoryItem, focused)}
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
    focused: state.getIn(['header','focused']),
    searchItem: state.getIn(['header', 'searchItem']),
    searchHistory: state.getIn(['header', 'searchHistory'])
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.setInputFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.setInputBlur())
    },
    handleDeleteHistoryItem(index, e) {
      e.stopPropagation()
      dispatch(actionCreators.deleteSearchHistoty(index))
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header)