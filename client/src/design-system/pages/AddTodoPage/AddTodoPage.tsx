import React from "react";
import {Card, FormInstance, Typography} from "antd";
import {addTodoRequested, selectTodosLoading} from "store/slices/todoSlice";
import DynamicForm from "design-system/organisms/DynamicForm";
import {IDynamicFormFieldProps} from "design-system/organisms/DynamicFormField";
import {useAppDispatch, useAppSelector} from "store/hooks";
import PageLayout from "design-system/templates/PageLayout";
import {ITodo} from "store/models";
import {useHistory} from "react-router-dom";

const fields: IDynamicFormFieldProps[] = [
  {
    name: "name",
    type: "input",
    placeholder: "What's in your mind?",
    rules: [{required: true, message: "This field is required"}],
  },
  {
    name: "description",
    type: "textarea",
    placeholder: "Would you like a description?",
    isTextArea: true,
    rows: 4,
  },
  {
    name: "deadline",
    type: "date",
    placeholder: "Add a dealine",
  },
];

const styles = {
  root: {
    maxWidth: 600,
    margin: "0 auto",
  },
};

const AddTodoPage: React.FC = () => {
  const loading = useAppSelector(selectTodosLoading);
  const dispatch = useAppDispatch();
  const history = useHistory();

  const onFinish = (form: FormInstance<any>) => {
    const todo = {
      name: form.getFieldValue("name"),
      description: form.getFieldValue("description"),
      deadline: form.getFieldValue("deadline")?.format(),
    } as ITodo;
    dispatch(addTodoRequested({todo, history}));
  };

  const formData = {
    name: "todo-add-form",
    fields,
    onFinish,
    submitProps: {
      label: "Add Todo",
      loading,
    },
  };

  return (
    <PageLayout>
      <div style={styles.root}>
        <Typography.Title level={1}>Just Todo</Typography.Title>
        <Typography.Text type="secondary">fill in the form and press Enter or press the button.</Typography.Text>

        <Card title="Create a new todo">
          <DynamicForm {...formData} />
        </Card>
      </div>
    </PageLayout>
  );
};

export default AddTodoPage;
