import { MINUS, PLUS, RESET } from "../../../common/constant";
import { Button } from "../../atoms/Button";

interface ButtonsProps {
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

export const Buttons = ({...props}: ButtonsProps) => {
  return (
    <div className="flex justify-center items-center gap-16">
      <Button label={PLUS} bgColor="blue" onClick={props.plusBtnClick} />
      <Button label={RESET} bgColor="green" onClick={props.resetBtnClick} />
      <Button label={MINUS} bgColor="red" onClick={props.minusBtnClick} />
    </div>
  );
};
