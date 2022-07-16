//react 와 달리 next 는 routing 을 알아서 해준다
// routing 기준은 pages 내의 파일 경로이고, 파일 이름으로 라우팅 주소를 구성한다.

import AppLayout from "../components/AppLayout";
import FollowList from "../components/FollowList";
import NicknameEditForm from "../components/NicknameEditForm";
import Head from "next/Head";

const Profile = () =>{
    // dummy data : 팔로워 팔로잉 리스트
    const followingList = [{nickname:'media-cho'}, {nickname:'zeroLee'}, {nickname:'momo'}];
    const followerList = [{nickname:'media-cho'}, {nickname:'zeroLee'}, {nickname:'momo'}];
    return (
        <>
            <Head>
                <title>profile | NodeBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm/>
                <FollowList header="팔로잉 목록" data = {followingList}/>
                <FollowList header="팔로워 목록" data = {followerList} />
            </AppLayout>    
        </>
    );
};
export default Profile;