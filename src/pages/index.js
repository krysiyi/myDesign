import Loadable from 'react-loadable';
import {LoadableLoading} from '../components';
const Home = Loadable(
    {
        loader:()=> import('./Home'),
        loading:LoadableLoading
    }
)
const Mine = Loadable(
    {
        loader:()=> import('./Mine'),
        loading:LoadableLoading
    }
)
const Detail = Loadable(
    {
        loader:()=> import('./Detail'),
        loading:LoadableLoading
    }
)
const Recommend = Loadable(
    {
        loader:()=> import('./Recommend'),
        loading:LoadableLoading
    }
)
const Search = Loadable(
    {
        loader:()=> import('./Search'),
        loading:LoadableLoading
    }
)
export{
    Home,Mine,Detail,Recommend,Search
};