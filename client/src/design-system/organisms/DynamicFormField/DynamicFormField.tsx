import FormDatePicker, {IFormDatePickerProps} from "design-system/molecules/FormDatePicker";
import FormInput, {IFormInputProps} from "design-system/molecules/FormInput";

export type IDynamicFormFieldProps = {type: "input" | "textarea" | "date"} & (IFormInputProps | IFormDatePickerProps);

const DynamicFormField = ({type, ...rest}: IDynamicFormFieldProps) => {
  switch (type) {
    case "date":
      return <FormDatePicker {...rest} />;
    default:
      return <FormInput {...rest} />;
  }
};

export default DynamicFormField;
