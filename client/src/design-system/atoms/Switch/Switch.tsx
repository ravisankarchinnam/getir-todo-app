import {Switch as ASwitch, SwitchProps} from "antd";
import {CloseOutlined, CheckOutlined} from "@ant-design/icons";

const Switch = (props: SwitchProps) => (
  <ASwitch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} {...props} />
);

export default Switch;
