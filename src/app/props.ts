export interface TodoProps {
  id: number;
  color: string;
  content: ContentProps[];
}

export interface ContentProps {
  id: number;
  todo: string;
  checked: boolean;
}

export interface AddBtnProps {
  todos: TodoProps[];
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
}

export interface CardProps {
  todo: TodoProps;
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
}
