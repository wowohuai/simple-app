import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
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

class Header extends Component {

  getListArea() {
    let { 
      focused, 
      mouseIn,
      page,
      totalPage,
      searchItem, 
      searchHistory, 
      handleDeleteHistoryItem,
      handleMouseEnter,
      handleMouseLeave,
      handleChangePage
    } = this.props
    // 一次仅展示10条数据
    const items = searchItem.slice(page * 10, (page +1) * 10)
    if (focused || mouseIn) {
      return (
        <SearchInfo 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          >
          <SearchInfoTitle onClick={() => {handleChangePage(page, totalPage, this.spinIcon)}}>
            热门搜索
            <SearchInfoSwitch>
              换一批
            </SearchInfoSwitch>
            <i ref = {(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe67b;</i>
          </SearchInfoTitle>
          <SearchInfoItemWrapper>
            {
              items.map((item, index) => {
                return (
                  <SearchInfoItem key={item}>{item}</SearchInfoItem>
                )
              })
            }
          </SearchInfoItemWrapper>
          <SerachInfoHistoryWrapper>
            {
              searchHistory.map((item, index) => {
                return (
                  <SerachInfoHistory key={item}>
                    <i className="iconfont history">&#xe675;</i>
                    <i className="iconfont delete" onClick={(e) => {
                      handleDeleteHistoryItem(index, e)
                    }
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

  render() {
    const { focused, searchItem, handleInputFocus, handleInputBlur } = this.props
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
              onFocus={() => { handleInputFocus(searchItem)}}
              onBlur={handleInputBlur}
            />
          </CSSTransition>
          <i className={focused ? 'iconfont focused' : 'iconfont'}>&#xe60d;</i>
          {this.getListArea()}
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
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    searchItem: state.getIn(['header', 'searchItem']).toJS(),
    searchHistory: state.getIn(['header', 'searchHistory']).toJS()
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus(searchItem) {
      dispatch(actionCreators.setInputFocus())
      if (!searchItem.length) {
        dispatch(actionCreators.getSearchItem())
      }
    },
    handleInputBlur() {
      dispatch(actionCreators.setInputBlur())
    },
    handleDeleteHistoryItem(index, e) {
      dispatch(actionCreators.deleteSearchHistoty(index))
    },
    handleMouseLeave(){
      dispatch(actionCreators.handleMouseMove(false))
    },
    handleMouseEnter(){
      dispatch(actionCreators.handleMouseMove(true))
    },
    handleChangePage(page, totalPage, icon) {
      let angle = icon.style.transform.replace(/[^0-9]/ig, '')
      angle = parseInt(angle, 10) ? parseInt(angle, 10) : 0
      icon.style.transform = `rotateZ(${angle + 180}deg)`
      let index = page < totalPage - 1 ? page += 1 : (page = 0)
      dispatch(actionCreators.changePage(index))
    }
  }
}

Header.propTypes = {
  focused: PropTypes.bool.isRequired,
  searchItem: PropTypes.array.isRequired,
  searchHistory: PropTypes.array.isRequired,
  handleInputFocus: PropTypes.func.isRequired,
  handleInputBlur: PropTypes.func.isRequired,
  handleDeleteHistoryItem: PropTypes.func.isRequired,
}


export default connect(mapStateToProps, mapDispathToProps)(Header)