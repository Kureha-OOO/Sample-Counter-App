import { Buttons } from "../../molecules/Buttons";

import { COUNT } from "../../../common/constant";

interface CounterAreaProps {
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

export const Counter = (props: CounterAreaProps) => {

  return (
    <div className="flex flex-col items-center lg:p-36 md:p-24 sm:p-12 ">
      <div className="grid grid-col-12 gap-4 text-xl p-20">
        <div className="col-start-2 col-end-6">{COUNT}</div>
        <div className="col-start-7 col-end-11">{props.count}</div>
      </div>
      <Buttons {...props} />
    </div>
  );
};

