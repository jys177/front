// _app.js 부모 컴포넌트, 모든 페이지의 부모역할을 한다. 공통 처리를 하기 위해 사용 ex) css
import React from 'react';
import propTypes from "prop-types";
import 'antd/dist/antd.css';
import Head from 'next/Head';

import wrapper from '../store/configureStore';

const NodeBird = ({Component}) =>{

    return (
        <>
            <Head>
                <meta charSet='utf-8'/>
                <title>NodeBird</title>
            </Head>
            <Component/>
        </>
    )
};
NodeBird.propTypes = {
    Component: propTypes.elementType.isRequired,
}
export default wrapper.withRedux(NodeBird);