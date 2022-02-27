import {Button as AButton, ButtonProps} from "antd";

export interface IButtonProps extends ButtonProps {
  label?: string;
}

const Button = ({label, ...rest}: IButtonProps) => {
  return (
    <AButton {...rest} shape="round">
      {label}
    </AButton>
  );
};

export default Button;
