import {useState, useCallback} from 'react';
import AppLayout from "../components/AppLayout";
import Head from "next/Head";
import { Form, Input, Checkbox, Button } from "antd";
import styled from 'styled-components';
import useInput from "../hooks/useInput";
//next 에서 프론트 서버 런타임시 파일을 추가하면 추가가 잘 될 경우도 있고 잘 안되는 경우도 있으므로 주의한다.

const ErrorMessage = styled.div`
    color: red
`;

const Signup = () =>{
    // 반복적인 훅이 자주 사용되는 경우 custom hook을 만들어서 사용하면 편리하다.
    const [id,onChangeId] = useInput('');
    const [password,onChangePassword] = useInput('');
    const [nickname,onChangeNickname] = useInput('');
    const [passwordCheck,setPasswordCheck] = useState('');
    const [passwordError,setPasswordError] = useState(false);
    const onChangePasswordCheck = useCallback((e)=>{
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    },[password]);

    const [term, setTerm] = useState('');
    const [termError, setTermError] = useState(false);
    const onChangeTerm = useCallback((e)=>{
        setTerm(e.target.checked);
        setTermError(false);
    },[]);

    const onSubmit = useCallback(()=>{
        if(password!==passwordCheck){
            return setPasswordError(true);
        }
        if(!term){
            return setTermError(true);
        }
        console.log(id,nickname,password);
    },[password,passwordCheck,term]);

    return (
        <AppLayout>
            <Head>
                <title>signup | NodeBird</title>
            </Head>
            <Form onFinish={onSubmit}>
                <div>
                    <label htmlFor="user-id">아이디</label>
                    <br/>
                    <Input name="user-id" value={id} required onChange={onChangeId}></Input>
                </div>
                <div>
                    <label htmlFor="user-nickname">닉네임</label>
                    <br/>
                    <Input name="user-nickname" value={nickname} required onChange={onChangeNickname}></Input>
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br/>
                    <Input name="user-password" type="password" value={password} required onChange={onChangePassword}></Input>
                </div>
                <div>
                    <label htmlFor="user-password-check">비밀번호체크</label>
                    <br/>
                    <Input 
                    name="user-password-check" 
                    type="password"
                    value={passwordCheck} 
                    required 
                    onChange={onChangePasswordCheck}></Input>
                    {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
                </div>
                <div>
                    <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
                        위 사항을 동의합니다.
                    </Checkbox>
                    {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
                </div>
                <div style={{marginTop : 10}}>
                    <Button type="primary" htmlType="submit">가입하기</Button>
                </div>
            </Form>
        </AppLayout>
    )
}
export default Signup;