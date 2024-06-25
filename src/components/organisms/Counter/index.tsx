import { useDispatch, useSelector } from "react-redux";

import { loadCurrentCount } from "../../../reducks/counters/selectors";
import { RootState } from "../../../reducks/store";
import { decrease, increase, reset } from "../../../reducks/counters/slices";

import { Buttons } from "../../molecules/Buttons";

import { COUNT } from "../../../common/constant";

export const Counter = () => {
  const selector = useSelector((state: RootState) => state)
  const count = loadCurrentCount(selector)

  const dispatch = useDispatch()

  const plusBtnClick = () => dispatch(increase())
  const minusBtnClick = () => dispatch(decrease())
  const resetBtnClick = () => dispatch(reset())

  const props = { plusBtnClick, minusBtnClick, resetBtnClick}

  return (
    <div className="flex flex-col items-center lg:p-36 md:p-24 sm:p-12 ">
      <div className="grid grid-col-12 gap-4 text-xl p-20">
        <div className="col-start-2 col-end-6">{COUNT}</div>
        <div className="col-start-7 col-end-11">{count}</div>
      </div>
      <Buttons {...props} />
    </div>
  );
};

