import {useState,useCallback} from 'react';

//반복적으로 사용하는 모양과 똑같이 함수로 만든다.
const useInput = (initValue=null) => {
    const [value, setValue] = useState(initValue);
    const handler = useCallback((e)=>{
        setValue(e.target.value);
    },[]);

    return[value,handler];
}
export default useInput;