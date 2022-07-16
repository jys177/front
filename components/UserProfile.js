import React,{useCallback} from 'react';
import { Avatar, Button, Card } from 'antd';
import {useDispatch} from 'react-redux';
import { logoutAction } from '../reducers';

const UserProfile =() =>{
    const dispatch = useDispatch();

    const onClickLogOut = useCallback(()=>{
        dispatch(logoutAction())
    },[]);
    return(
        <Card
            actions={[
                <div key="twit">트윗</div>,
                <div key="following">팔로잉</div>,
                <div key="follower">팔로워</div>,
            ]}
        >
            <Card.Meta
                avatar={<Avatar>MC</Avatar>}
                title = "media-cho"
            />
            <Button onClick={onClickLogOut}>로그아웃</Button>
        </Card>
    );
}
export default UserProfile;