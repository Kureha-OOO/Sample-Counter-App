import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { loadCurrentCount } from '../../../reducks/counters/selectors';
import { RootState } from '../../../reducks/store';
import { decrease, increase, reset } from '../../../reducks/counters/slices';
import { CounterTop } from '../../templates/top';

const CounterApp: React.FC = () => {

  const selector = useSelector((state: RootState) => state)
  const count = loadCurrentCount(selector)

  const dispatch = useDispatch()

  const plusBtnClick = () => dispatch(increase())
  const minusBtnClick = () => dispatch(decrease())
  const resetBtnClick = () => dispatch(reset())

  const props = { count, plusBtnClick, minusBtnClick, resetBtnClick}
  return (
    <CounterTop {...props} />
  );
}

export default CounterApp
