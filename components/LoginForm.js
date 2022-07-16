import { Button, Input, Form} from 'antd';
import Link from 'next/link';
import React,{useState,useCallback} from 'react';
import { useDispatch } from 'react-redux';
import { loginAction } from '../reducers';
//component 에 props 로 넘겨주는 ##은 useCallback 으로 넘겨줘라. 그래야 최적화가 된다. 
const LoginForm =() =>{
    const [id,setId] = useState('');
    const [password,setPassword] = useState('');

    const dispatch = useDispatch();

    const onChangeId = useCallback((e)=>{
        setId(e.target.value);
    },[]);

    const onChangePassword = useCallback((e)=>{
        setPassword(e.target.value);
    },[]);

    const onSubmitForm = useCallback(()=>{
        console.log(id,password);
        dispatch(loginAction({id,password}));
    },[id,password]);

    return(
        <Form onFinish={onSubmitForm}>
            <div>
                <label htmlFor='user-id'>아이디</label>
                <br/>
                <Input name='user-id' value={id} onChange={onChangeId} required />
            </div>
            <div>
                <label htmlFor='user-password'>패스워드</label>
                <br/>
                <Input name='user-password' value={password} type='password' onChange={onChangePassword} required />
            </div>
            <div>
                <Button type='primary' htmlType='submit' loading={false}>로그인</Button>
                <Link href='/signup'><a><Button>회원가입</Button></a></Link>
            </div>

        </Form>
    );
}
export default LoginForm;