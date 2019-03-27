import React, { Component } from 'react'
import {connect} from 'react-redux';
import {changePageTitle} from '../../actions/pageaction';
import {Search} from '../../components'
import {Tabs} from 'antd-mobile'
import icon1 from '../../images/icon1.jpg'
import icon2 from '../../images/icon2.png'
import icon3 from '../../images/icon3.png'
import cover from '../../images/cover.png'
import './home.less'

@connect(null,{changePageTitle})
export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      currentNav: this.tab[0]?this.tab[0].key:''
    }
  }
  componentDidMount(){
    //console.log(this.props);
    this.props.changePageTitle('krysiyi');
  }

  tab = [{
    title: '电影',
    key: 'movie',
  }, {
    title: '电视',
    key: 'tv',
  }, {
    title: '综艺',
    key: 'variety',
  }, {
    title: '读书',
    key: 'book',
  }, {
    title: '音乐',
    key: 'music'
  }]

  tabs = [
    {title: '影院热映'},
    {title: '即将上线'},
  ]

  handleNavChange = (e) => {
    e.persist()
    console.log(e.target.dataset.id)
    this.setState({
      currentNav: e.target.dataset.id
    })
  }

  movie = [
    {id: 0, name:'测试电影1', score: 4.5, cover, collection: false},
    {id: 1, name:'测试电影2', score: 3.5, cover, collection: false},
    {id: 2, name:'测试电影3', score: 2.5, cover, collection: false},
    {id: 3, name:'测试电影4', score: 5.0, cover, collection: false},
    {id: 4, name:'测试电影5', score: 4.0, cover, collection: false},
    {id: 5, name:'测试电影6', score: 4.5, cover, collection: false},
    {id: 6, name:'测试电影7', score: 4.5, cover, collection: false},
    {id: 7, name:'测试电影8', score: 4.5, cover, collection: false},
    {id: 8, name:'测试电影9', score: 4.5, cover, collection: false},
  ]

  countingStar = (score) => {
    const arr = []
    const brr = []
    for (let i=1;i<=5;i++) {
      if(score>=i)
        arr.push(1)
      else if(Math.ceil(score)<i)
      brr.push(1)
    }
    return {
      fill: arr,
      half: score>Math.floor(score)?true:false,
      empty: brr
    }
  }

  handleToSearch = () => {
    this.props.history.push('/search')
  }

  render() {
    const {currentNav} = this.state
    return (
      <div className='home'>
       <div className='searchbox'><Search disabled fn={this.handleToSearch} /></div>
       <ul className='nav' onClick={this.handleNavChange}>
        {
          this.tab.map(item => {
            return(<li data-id={item.key} key={item.key} className={currentNav===item.key?'active':''}>{item.title}</li>)
          })
        }
       </ul>
       <div className='menu'>
        <div className='item'>
          <img src={icon1} alt='' />
          <span>找电影</span>
        </div>
        <div className='item'>
          <img src={icon2} alt='' />
          <span>豆瓣榜单</span>
        </div>
        <div className='item'>
          <img src={icon3} alt='' />
          <span>豆瓣片单</span>
        </div>
       </div>
       <section className='content'>
        <div className='adver'>
          <div className='covers'>
            <img src={cover} alt='' />
            <img src={cover} alt='' />
            <img src={cover} alt='' />
          </div>
          <div className='title'>
            今日影片已更新
          </div>
        </div>
        <Tabs tabs={this.tabs} initialPage={0} animated={false} useOnPan={false} tabBarUnderlineStyle={{backgroundColor: '#000'}} tabBarActiveTextColor='#000' tabBarInactiveTextColor='#818181' >
          <div className='list'>
            {
              this.movie.map(item => {
                return(
                  <div className='item' key={item.id}>
                    <i className='icon-font icon-jiaobiao jiaobiao'></i>
                    <img src={item.cover} alt='' />
                    <span className='name'>{item.name}</span>
                    <div className='score'>
                      {
                        this.countingStar(item.score).fill.map((e,index) => {
                        return (
                          <i className='iconfont icon-starfill' key={index}></i>
                        )
                      })
                      }
                      {
                        this.countingStar(item.score).half&&<i className='iconfont icon-starhalf'></i>
                      }
                      {
                        this.countingStar(item.score).empty.map((e,index) => {
                        return (
                          <i className='iconfont icon-star' key={index}></i>
                        )
                      })
                      }
                      <span className='num'>{' ' + item.score}</span>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div>列表2</div>
        </Tabs>
       </section>
      </div>
    )
  }
}

