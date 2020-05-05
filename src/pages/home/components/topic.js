import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../store/action-creators'
import imgPic from '@/static/img/topic.jpg'
import {
  TopicWrapper,
  TopicItem
} from '../style'

class Topic extends Component {
  render() {
    const { list } = this.props
    return (
      <TopicWrapper>
        {
          list.map((item, index) => {
            return (
              <TopicItem key={item.get('title')}>
                <img src={imgPic} className='topic-pic' alt='图片加载失败'/>
                <span>{item.get('title')}</span>
              </TopicItem>
            )
          })
        }
      </TopicWrapper>
    )
  }
  componentDidMount() {
    this.props.getTopicList()
  }
}
const mapStateToProps = state => {
  return {
    list: state.getIn(['home', 'topicList'])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTopicList() {
      dispatch(actionCreators.getTopicList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic)
