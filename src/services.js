import axios from 'axios';
import {
  Toast
} from 'antd-mobile';
// 创建实例
const isDev = process.env.NODE_ENV === 'development';
const ajax = axios.create({
  baseURL: isDev ? 'http://rap2api.taobao.org/app/mock/95101' : '真实的api地址'
});

// 拦截器
ajax.interceptors.request.use(config=>{
  Toast.loading('加载中……', 0)
  return config;
})

ajax.interceptors.response.use(resp=> {
  Toast.hide();
  return resp;
});

export const server = {
  post: (url,opt) => {
    return new Promise((resolve,reject) => {
      ajax.post(url,opt).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  get: (url) => {
    return new Promise((resolve,reject) => {
      ajax.get(url).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
export const getProductList = () => {
  return server.get('/hotpot/v1/mall');
}

export const getProductTypeList = (obj) => {
  return server.get('/hotpot/v1/pt',obj);
}

export const getProductDetail=(id)=>{
  return server.get(`/hotpot/v1/detail/${id}`);
}


export const login = () => {
  return server.get('/hotpot/v1/login');
}

export const checkToken = () => {
  return server.get('/hotpot/v1/checktoken');
}