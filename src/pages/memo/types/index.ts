export type VisibilityType = "all" | "active" | "completed";

export type TodoType = {
  label: string;
  key: string;
  visibility: VisibilityType;
};

export type UpdateTodoFnType = (todos: Array<TodoType>, todo: TodoType) => Array<TodoType>;
