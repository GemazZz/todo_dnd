export interface TodoProps {
  id: number;
  color: string;
  content: ContentProps[];
}
interface ContentProps {
  todo: string;
  checked: boolean;
}

export interface AddBtnProps {
  todos: TodoProps[];
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
}
