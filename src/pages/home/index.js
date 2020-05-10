import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from './store/action-creators'
import { List, Writer, Recommend, Topic } from './components'
import {
  Wrapper,
  LeftContainer,
  RightContainer,
  BackTop,
  BackTitle
} from './style'
class Home extends PureComponent {
  render() {
    return (
      <Wrapper>
        <LeftContainer>
          {/* <Topic /> */}
          <List/>
        </LeftContainer>
        <RightContainer>
          <Recommend />
          <Writer />
        </RightContainer>
        {this.backTop()}
      </Wrapper>
    )
  }
  backTop() {
    const { show, showBack, showTitle, hiddeTitle } = this.props
    if(showBack) {
      return (
        <BackTop
          onMouseEnter={showTitle}
          onMouseLeave={hiddeTitle}
          onClick={() => { this.handleScrollTop() }}
        >
          <i className="iconfont">&#xe60d;</i>
          {
            show && <BackTitle><span>回到顶部</span></BackTitle>
          }
        </BackTop>
      )
    }
    return null;
    
  }
  handleScrollTop(position = 0) {
    if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = function (callback, element) {
        return setTimeout(callback, 17);
      };
    }
    // 当前滚动高度
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    // 滚动step方法
    let step = function () {
      // 距离目标滚动距离
      let distance = position - scrollTop;
      // 目标滚动位置
      scrollTop = scrollTop + distance / 10;
      if (Math.abs(distance) < 1) {
        window.scrollTo(0, position);
      } else {
        window.scrollTo(0, scrollTop);
        requestAnimationFrame(step);
      }
    };
    step();
    this.props.hiddeTitle()
  }
  componentDidMount() {
    this.props.getHomeData()
    window.addEventListener('scroll', this.props.toggleBackTop)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.toggleBackTop)
  }
}
const mapState = state => ({
  show: state.getIn(['home', 'showBackTitle']),
  showBack: state.getIn(['home', 'showBack'])
})
const mapDispatch = dispatch => {
  return {
    getHomeData() {
      dispatch(actionCreators.getHomeData())
    },
    showTitle() {
      dispatch(actionCreators.setBackTitle(true))
    },
    hiddeTitle() {
      dispatch(actionCreators.setBackTitle(false))
    }, 
    toggleBackTop() {
      const scrollTop = document.documentElement.scrollTop + document.body.scrollTop
      if(scrollTop >= 100) {
        dispatch(actionCreators.setBackTop(true))
      }else{
        dispatch(actionCreators.setBackTop(false))
      }
    }
  }
}

export default connect(mapState, mapDispatch)(Home)