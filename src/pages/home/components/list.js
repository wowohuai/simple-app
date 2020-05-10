import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import imgPic from '@/static/img/topic.jpg'
import {
  ListItem,
  ListInfo,
  ListTitle,
  ListMeta,
  ListLoading
} from '../style'
import { actionCreators } from '../store'

class List extends PureComponent {
  render() {
    const { list, page, getMoreList } = this.props
    return (
      <Fragment>
        {
          list.map((item, index) => {
            return (
              <ListItem className='have-img' key={index}>
                <div className='list-item-pic'>
                  <img src={imgPic} />
                </div>
                <ListInfo>
                    <Link to='/detail'>
                      <ListTitle>{item.get('title')}</ListTitle>
                    </Link>
                  <p className='desc'>{item.get('desc')}</p>
                  <ListMeta>
                    <li>136.4</li>
                    <li>零点壹弋一</li>
                    <li>143</li>
                    <li>456</li>
                    <li>8</li>
                  </ListMeta>
                </ListInfo>
              </ListItem>
            )
          })
        }
        <ListLoading onClick={() => getMoreList(page)}>
          阅读更多
        </ListLoading>
      </Fragment>
    )
  }
}

const mapState = state => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage'])
})

const mapDispatch = dispatch => ({
  getMoreList(page) {
    dispatch(actionCreators.getList(page))
  }
})

export default connect(mapState, mapDispatch)(List)