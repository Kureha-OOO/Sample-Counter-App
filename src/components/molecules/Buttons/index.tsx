import { MINUS, PLUS, RESET } from "../../../common/constant";
import { Button } from "../../atoms/Button";

interface ButtonsProps {
	/**
	 * plus button click handler
	 */
	plusBtnClick?: () => void;
  	/**
	 * minus button click handler
	 */
	minusBtnClick?: () => void;
    	/**
	 * reset button click handler
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
