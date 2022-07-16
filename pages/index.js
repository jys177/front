// import React from 'react' 가 필요 없음
// next 에서 'pages' 폴더 밑에 파일들을 각각 화면 컴포넌트로 인식함.

import AppLayout from "../components/AppLayout";

const Home = () =>{
    return (
    //components 폴더에서 만든 레이아웃을 페이지마다 감싸서 사용할 수 있다.
    // 다른 레이아웃을 사용하고 싶으면 component에 새로 추가하여 새로운 레이아웃으로 구현할 수 있다.
    <AppLayout>
        <div>Hello Next </div>
    </AppLayout>);
}
export default Home;