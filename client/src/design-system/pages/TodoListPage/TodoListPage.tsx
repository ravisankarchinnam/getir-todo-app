import React, {useEffect} from "react";
import {useHistory} from "react-router-dom";
import {Typography, Card} from "antd";
import {ArrowLeftOutlined} from "@ant-design/icons";

import {useAppDispatch} from "store/hooks";
import {fetchTodosRequested} from "store/slices/todoSlice";
import TodoList from "design-system/organisms/TodoList";
import PageLayout from "design-system/templates/PageLayout";
import Button from "design-system/atoms/Button";

const styles = {
  backBtn: {
    paddingLeft: 0,
    marginBottom: 10,
  },
  list: {
    maxWidth: 800,
    margin: "0 auto",
  },
};

const TodoListPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchTodosRequested());
  }, [dispatch]);

  return (
    <PageLayout>
      <Button
        type="link"
        onClick={() => history.push("/")}
        icon={<ArrowLeftOutlined />}
        size="large"
        label="Back"
        style={styles.backBtn}
      />

      <Card title={<Typography.Title level={1}>List of Todos</Typography.Title>} style={styles.list}>
        <TodoList />
      </Card>
    </PageLayout>
  );
};

export default TodoListPage;
