import {Form, FormInstance} from "antd";
import Button from "design-system/atoms/Button";
import FormElement from "design-system/molecules/FormElement";
import DynamicFormField, {IDynamicFormFieldProps} from "../DynamicFormField";
import {PlusCircleFilled} from "@ant-design/icons";
import {IButtonProps} from "design-system/atoms/Button/Button";
import {Store} from "antd/lib/form/interface";

interface IDynamicFormProps {
  name: string;
  fields: IDynamicFormFieldProps[];
  onFinish: (values: FormInstance<any>) => void;
  submitProps: IButtonProps;
  initialValues?: Store;
  index?: string;
}

const DynamicForm = ({onFinish, name, fields, submitProps, initialValues, index}: IDynamicFormProps) => {
  const [form] = Form.useForm();
  const {loading = false, label} = submitProps;
  return (
    <Form
      key={index}
      form={form}
      onFinish={() => {
        onFinish(form);
      }}
      layout="vertical"
      name={name}
      initialValues={initialValues}
    >
      {fields?.map((field) => (
        <FormElement key={field?.name}>
          <DynamicFormField {...field} disabled={!!loading} />
        </FormElement>
      ))}
      <FormElement colProps={{sm: 8}}>
        <Button type="primary" htmlType="submit" block icon={<PlusCircleFilled />} loading={loading} label={label} />
      </FormElement>
    </Form>
  );
};

export default DynamicForm;
