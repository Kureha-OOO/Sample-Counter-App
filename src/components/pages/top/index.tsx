import React from 'react';
import { Header } from '../../organisms/Header';
import { Counter as CountArea } from '../../organisms/Counter';
import { APP_NAME } from '../../../common/constant';

const CounterApp: React.FC = () => {
  return (
    <div>
      <Header title={APP_NAME} bgColor='blue' />
      <CountArea />
    </div>
  );
}

export default CounterApp
