import {Request, Response} from "express";
import {ITodo} from "../types/todo";
import TodoModel from "../models/todo";
import Joi from "joi";

const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos = await TodoModel.find().sort({date: -1});
    res.send(todos);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error: " + error.message);
  }
};

const getTodoById = async (req: Request, res: Response): Promise<void> => {
  try {
    const todo = await TodoModel.findById(req.params.id);
    res.send(todo);
  } catch (error) {
    console.error(error.message);
    res.status(404).send("Todo not found...");
  }
};

const addTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const schema = Joi.object({
      name: Joi.string().min(3).max(300).required(),
      description: Joi.string().allow("", null),
      deadline: Joi.date(),
    });

    const {error} = schema.validate(req.body);

    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }

    const {name, isCompleted, description, deadline} = req.body as Pick<
      ITodo,
      "name" | "description" | "deadline" | "isCompleted"
    >;

    let todo: ITodo = new TodoModel({name, isCompleted, description, deadline});

    todo = await todo.save();
    res.send(todo);
  } catch (error) {
    console.error(error.message);
    res.status(500).send(error.message);
  }
};

const updateTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const schema = Joi.object({
      name: Joi.string().min(3).max(300).required(),
      isCompleted: Joi.boolean(),
    });

    const {error} = schema.validate(req.body);

    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }

    const todo: ITodo = await TodoModel.findById(req.params.id);

    if (!todo) {
      res.status(404).send("Todo not found...");
      return;
    }

    const {name, isCompleted} = req.body;

    const updatedTodo: ITodo = await TodoModel.findByIdAndUpdate(req.params.id, {name, isCompleted}, {new: true});

    res.send(updatedTodo);
  } catch (error) {
    throw error;
  }
};

const deleteTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const todo: ITodo = await TodoModel.findById(req.params.id);

    if (!todo) {
      res.status(404).send("Todo not found...");
      return;
    }

    const deletedTodo = await TodoModel.findByIdAndDelete(req.params.id);

    res.send(deletedTodo);
  } catch (error) {
    throw error;
  }
};

export {getTodos, getTodoById, addTodo, updateTodo, deleteTodo};
