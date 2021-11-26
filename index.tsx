import React from 'react';
import {Button } from 'antd';
import { useHistory } from 'umi';

const Welcome: React.FC = () => {
    const history = useHistory();
    const dianji = () => {
        history.push({
            pathname:'/user/login'
        })
    }
  return (
   <Button onClick={dianji}>点击</Button>
  );
};

export default Welcome;
