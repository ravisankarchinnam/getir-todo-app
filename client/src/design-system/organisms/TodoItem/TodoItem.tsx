import React from "react";
import {Tooltip, Tag, List, Typography, Popconfirm, Avatar, Badge} from "antd";
import {DeleteOutlined, FileDoneOutlined, FileOutlined} from "@ant-design/icons";

import styles from "./TodoItem.module.scss";
import {ITodo} from "store/models";
import Button from "design-system/atoms/Button";
import {QuestionCircleOutlined} from "@ant-design/icons";
import Switch from "design-system/atoms/Switch";
import {getDiffDays} from "utils";

interface ITodoItemProps {
  todo: ITodo;
  onTodoUpdate: (todo: ITodo) => void;
  onTodoDelete: (todo: ITodo) => void;
}

const renderDescription = (description?: string) =>
  description && (
    <Typography.Paragraph className={styles.descrption} ellipsis={{rows: 3}}>
      {description}
    </Typography.Paragraph>
  );

const renderDeadline = (deadline?: Date) => {
  const days = getDiffDays(deadline);
  return days > 0 && <Badge color="red" status="processing" text={`Remaining: ${days} days`} />;
};

const TodoItem: React.FC<ITodoItemProps> = ({todo, onTodoUpdate, onTodoDelete}) => {
  const {_id: id, name, description, deadline, isCompleted} = todo;
  return (
    <List.Item
      className={styles.meta}
      actions={[
        <Tooltip title={isCompleted ? "Mark as uncompleted" : "Mark as completed"}>
          <Switch
            onChange={(checked: boolean) => onTodoUpdate({...todo, isCompleted: checked})}
            defaultChecked={isCompleted}
          />
        </Tooltip>,
        <Popconfirm
          title="Are you sure you want to delete?"
          icon={<QuestionCircleOutlined className={styles.icon} />}
          onConfirm={() => {
            onTodoDelete(todo);
          }}
        >
          <Button type="primary" danger icon={<DeleteOutlined />} shape="circle" />
        </Popconfirm>,
      ]}
      key={id}
    >
      <List.Item.Meta
        className={styles.meta}
        avatar={<Avatar icon={isCompleted ? <FileDoneOutlined /> : <FileOutlined />} shape="circle" size={50} />}
        title={name}
        description={
          <>
            {renderDescription(description)}
            {renderDeadline(deadline)}
          </>
        }
      />

      <Tag color={isCompleted ? "success" : "error"}>{isCompleted ? "completed" : "incomplete"}</Tag>
    </List.Item>
  );
};

export default TodoItem;
