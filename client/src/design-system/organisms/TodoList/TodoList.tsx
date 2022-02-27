import React from "react";
import {List, Empty} from "antd";
import {useAppDispatch, useAppSelector} from "store/hooks";
import {deleteTodoRequested, selectTodos, updateTodoRequested} from "store/slices/todoSlice";
import {ITodo} from "store/models";
import TodoItem from "design-system/organisms/TodoItem";

const TodoList: React.FC = () => {
  const todos: ITodo[] = useAppSelector(selectTodos);
  const dispatch = useAppDispatch();

  const handleDeleteTodo = (todo: ITodo): void => {
    dispatch(deleteTodoRequested(todo?._id));
  };

  const handleUpdateTodo = (todo: ITodo): void => {
    dispatch(updateTodoRequested(todo));
  };

  return (
    <List
      locale={{emptyText: <Empty description="No Todos!" />}}
      dataSource={todos}
      renderItem={(todo) => <TodoItem todo={todo} onTodoUpdate={handleUpdateTodo} onTodoDelete={handleDeleteTodo} />}
      pagination={{
        position: "bottom",
        pageSize: 10,
      }}
    />
  );
};

export default TodoList;
