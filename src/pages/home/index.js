import React, { Component } from 'react'
import { List, Writer, Recommend, Topic} from './components'
import {
  Wrapper,
  LeftContainer,
  RightContainer
} from './style'
class Home extends Component {
  render() {
    return (
      <Wrapper>
        <LeftContainer>
          <Topic />
          <List/>
        </LeftContainer>
        <RightContainer>
          <Recommend />
          <Writer />
        </RightContainer>
      </Wrapper>
    )
  }
}

export default Home