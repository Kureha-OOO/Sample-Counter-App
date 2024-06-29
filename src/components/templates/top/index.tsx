import { Header } from '../../organisms/Header';
import { Counter as CountArea } from '../../organisms/Counter';
import { APP_NAME } from '../../../common/constant';

interface CounterTopProps {
  /**
   * 現在のカウント
   */
  count: number;
  /**
   * ＋ボタン押下時のイベント
   */
  plusBtnClick?: () => void;
  /**
 　* ーボタン押下時のイベント
 　*/
  minusBtnClick?: () => void;
  /**
　* ↺ボタン押下時のイベント
　*/
  resetBtnClick?: () => void;
}

export const CounterTop = (props: CounterTopProps) => {
  return (
    <div>
      <Header title={APP_NAME} bgColor='blue' />
      <CountArea {...props} />
    </div>
  );
}

