import {Home,Mine,Detail,Recommend,Search} from './pages';

const routes = [{
    path: '/home',
    text: '首页',
    icon: 'home',
    isTabbarItem:true,
    component:Home
  },{
    path: '/recommend',
    text: '推荐',
    icon: 'heart',
    isTabbarItem:true,
    component:Recommend
  }, {
    path: '/mine',
    text: '我的',
    icon: 'mine',
    isTabbarItem:true,
    component:Mine
  },{
    path: '/search',
    text: '搜索',
    component: Search
  },
  {
    path: '/detail/:id',
    text: '详情',
    component:Detail
  }];
  
  export default routes;