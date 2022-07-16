import {createWrapper} from 'next-redux-wrapper';
import { createStore } from 'redux';
import reducer from '../reducers';

//store : state 와 reducer 를 포함하는 것
//state : 중앙 데이터 저장소, state 가 중앙에 모여있는 것.
//reducer : action 을 정의하는 곳
const configureStore= () =>{
    const store = createStore(reducer);
    return store;
};


const wrapper = createWrapper(configureStore,{
    debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
