import mongoose, {Model, Schema} from "mongoose";
import {ITodo} from "../types/todo";

/* TodoSchema refers to a collection Todo in the MongoDB database. */
const todoSchema: Schema = new mongoose.Schema(
  {
    name: {type: String, required: true, minlength: 3, maxlength: 200},
    description: {type: String},
    deadline: {type: Date, default: null},
    isCompleted: {type: Boolean, default: false},
  },
  {timestamps: true},
);

const TodoModel: Model<ITodo> = mongoose.model("Todo", todoSchema);

export default TodoModel;
