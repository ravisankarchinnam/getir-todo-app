import {DatePicker, DatePickerProps, Form} from "antd";

export type IFormDatePickerProps = {
  name: string;
  showTime?: boolean;
} & DatePickerProps;

const FormDatePicker = ({name, placeholder, showTime = true}: IFormDatePickerProps) => (
  <Form.Item name={name}>
    <DatePicker showTime={showTime} placeholder={placeholder} />
  </Form.Item>
);

export default FormDatePicker;
