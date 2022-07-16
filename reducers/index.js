const initialState = {
    user:{
        isLoggedIn:false,
        user:null,
        signUpData:null,
        loginData:null,
    },
    post: {
        mainPost:[],
    },
}
//다른 곳에서 사용하기 위해 export 시켜준다.
export const loginAction = (data) =>{
    return{
        type:'LOG_IN',
        data
    }
}
export const logoutAction = () =>{
    return{
        type:'LOG_OUT',
    }
}


//reducer : (이전상태, 액션) => 다음 상태 , 이전 상태와 액션을 통해 다음 상태를 만들어 내는것
const rootReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'LOG_IN':
            return{
                ...state,
                user: {
                    ...user.state,
                    isLoggedIn:true,
                    user: action.data,
                }
            };
        case 'LOG_OUT':
            return {
                ...state,
                user: {
                    ...user.state,
                    isLoggedIn:false,
                    user: null,
                }
            };
    }
};

export default rootReducer;