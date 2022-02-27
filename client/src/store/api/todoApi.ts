import {ITodo} from "./../models/todo";
import apiClient from "./apiClient";

const todoAPI = {
  getAll(id = null): Promise<ITodo[]> {
    return apiClient.get("/todos");
  },

  getById(id: string): Promise<ITodo> {
    const url = `/todos/${id}`;
    return apiClient.get(url);
  },

  add(todo: ITodo): Promise<ITodo> {
    return apiClient.post("/todos", todo);
  },

  delete(id: string): Promise<ITodo> {
    return apiClient.delete("/todos/" + id);
  },

  update(todo: Partial<ITodo>): Promise<ITodo> {
    const {_id, name, isCompleted} = todo;
    return apiClient.put("/todos/" + _id, {
      name,
      isCompleted,
    });
  },
};

export default todoAPI;
