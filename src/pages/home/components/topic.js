import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import imgPic from '@/static/img/topic.jpg'
import {
  TopicWrapper,
  TopicItem
} from '../style'

class Topic extends PureComponent {
  render() {
    const { list } = this.props
    return (
      <TopicWrapper>
        {
          list.map((item, index) => {
            return (
              <TopicItem key={item.get('id')}>
                <img src={imgPic} className='topic-pic' alt='图片加载失败'/>
                <span>{item.get('title')}</span>
              </TopicItem>
            )
          })
        }
      </TopicWrapper>
    )
  }
  
}
const mapStateToProps = state => {
  return {
    list: state.getIn(['home', 'topicList'])
  }
}


export default connect(mapStateToProps, null)(Topic)
