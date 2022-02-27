import {Form, Input} from "antd";
import {Rule} from "antd/lib/form";

export interface IFormInputProps {
  name: string;
  rules?: Rule[];
  placeholder?: string;
  isTextArea?: boolean;
  rows?: number;
}

const FormInput = ({name, rules, placeholder, isTextArea, rows}: IFormInputProps) => {
  const InputElement = !isTextArea ? Input : Input.TextArea;
  return (
    <Form.Item name={name} rules={rules}>
      <InputElement placeholder={placeholder} rows={rows} />
    </Form.Item>
  );
};

export default FormInput;
