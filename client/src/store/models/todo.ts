export interface ITodo {
  _id: string;
  name: string;
  isCompleted: boolean;
  createdAt: string;
  updatedAt: string;
  description?: string;
  deadline?: Date;
}
