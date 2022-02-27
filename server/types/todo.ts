import {Document} from "mongoose";

export interface ITodo extends Document {
  name: string;
  isCompleted: boolean;
  description?: string;
  deadline?: Date;
}
