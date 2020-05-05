import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  box-sizing: border-box;
  height: 200px;
  padding-top: 20px;
  padding-right: 0;
`

export const LeftContainer = styled.div`
  float: left;
  width: 640px;
`
export const RightContainer = styled.div`
  float: right;
  width: 280px;
  margin-left: 40px;
`

export const TopicWrapper = styled.div`
  padding-left: 10px;
  overflow: hidden;
  font-size: 14px;
  margin-left: -18px;
`

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height:32px;
  background: #f7f7f7;
  border:1px solid  #dcdcdc;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 18px;
  border-radius: 2px;
  .topic-pic {
    width: 32px;
    height: 32px;
    vertical-align: bottom;
    margin-right: 10px;
  }
`
