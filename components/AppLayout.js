//npm i proptypes : ??? 설명이 필요함
//next/link 컴포넌트 a tag 지원-> 리액트 핫 로더
import PropTypes from "prop-types";
import Link from "next/link";
import {Menu, Col, Row} from "antd";

import LoginForm from "./LoginForm";
import UserProfile from "./UserProfile";
import { useSelector } from "react-redux";

//Row ,Col antd 와 같이 css fw 에서 지원하는 그리드 시스템
//column 은 24분할 기준이고 24를 넘으면 다음 줄로 넘어간다. xs sm md lg ... 해상도가 작은 것 부터 큰 순서
// gutter : column 간 간격 지정, fx 기준
// version issue : Warning: [antd: Menu] `children` will be removed in next major version. Please use `items` instead. 

const AppLayout = ({children})=>{
    const items = [
        {
            label:(
                <Link href="/"><a>노드버드</a></Link>
            ),
            key: 'index'
        },
        {
            label: (
                <Link href="/profile"><a>프로필</a></Link>
            ),
            key: 'profile'
        },
        {
            label: (
                <Link href="/signup"><a>회원가입</a></Link>        
            ),
            key: 'signup'
        }
    ]
    
    
    const [current,setCurrent] = React.useState('index');
    
    //const [isLoggedIn,setIsLoggedIn] = React.useState(false); redux 사용으로 더미는 주석
    const isLoggedIn = useSelector((state)=>state.user.isLoggedIn);//실제 중앙 state 가 바뀐 것을 받아옴

    const onClick =  (e) =>{
        setCurrent(e.key);
    };


    return(
        //return 안에 들어갈수 있는 것들은 모두 노드다.
        //children rendering
        //a 태그 없이도 되던데 머선일인구
        <div>
            {/* 
            version issue : 다음과 같은 방식이 deprecate 됨
            <Menu mode="horizontal" defaultSelectedKeys={['index']}>
                <Menu.Item key="index">
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item key="profile">
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item key="signup">
                    <Link href="/signup"><a>회원가입</a></Link>        
                </Menu.Item>
            </Menu> */}
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
            <Row gutter={8}>
                <Col xs={24} sm={6} md={6}>
                    {/* 더미 데이터 제거로 인해 useState hook 이 필요 없어짐 props 로 보내던게 필요 없어져서 컴포넌트도 수정해야함
                    {isLoggedIn?<UserProfile setIsLoggedIn={setIsLoggedIn}/>:<LoginForm setIsLoggedIn={setIsLoggedIn}/>} */}
                    {isLoggedIn?<UserProfile/>:<LoginForm/>}
                </Col>
                <Col xs={24} sm={18} md={12}>
                    {children}    
                </Col>
                <Col xs={24} sm={24} md={6}>
                    <a href="https://www.notion.so/Study-1f978d0dbb674c0da91140e271c7323d" target="_blank" rel="noreferrer noopener"> media-cho </a>
                </Col>
            </Row>
            
        </div>
    )
}

AppLayout.propTypes={
    children: PropTypes.node.isRequired,
};

export default AppLayout;