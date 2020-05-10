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
  border-bottom: 1px solid #f0f0f0;
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


export const ListItem = styled.div`
  position: relative;
  margin: 0 0 15px;
  padding: 15px 2px 20px 0;
  border-bottom: 1px solid #f0f0f0;
  box-sizing: border-box;
  &.have-img {
    min-height: 140px;
  }
  .list-item-pic{
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -50px;
  }
  .list-item-pic img{
    width: 150px;
    height: 100px;
    border-radius: 3px;
  }
`

export const ListInfo = styled.div`
  padding-right: 165px;
  .desc{
    line-height: 24px;
    font-size: 13px;
    color: #999;
    margin-bottom: 10px;
  }
`

export const ListTitle = styled.div`
  font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
  font-weight: bold;
  font-size: 18px;
  color: #333;
  line-height:27px;
`

export const ListMeta = styled.div`
  overflow: hidden;
  padding-right: 0!important;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  margin-left:-14px;
  color: #b4b4b4;
  li {
    float: left;
    margin-left: 14px;
  }
  li:nth-child(1) {
    color: #ea6f5a;
  }
`

export const ListLoading = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0 ;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`

export const BackTop = styled.div`
  position: fixed;
  right: 40px;
  bottom: 40px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 2px;
  text-align: center;
  border: 1px solid #dcdcdc;
  .iconfont {
    padding-top: 16px;
    font-size: 20px;
    display: block;
  }
  &:hover {
    background-color: hsla(0,0%,71%,.1)
  }
`
export const BackTitle = styled.div`
  position: absolute;
  background: #000;
  right: 100%;
  margin-right: 10px;
  font-size: 12px;
  color: #fff;
  padding: 8px 10px;
  border-radius: 3px;
  top: 50%;
  transform: translateY(-50%);
  white-space: nowrap;
  &::after {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-left-color: #000;
    right: -12px;
    top: 50%;
    transform: translateY(-50%);
  }
`