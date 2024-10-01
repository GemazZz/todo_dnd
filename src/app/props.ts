export interface TodoProps {
  id: number;
  color: string;
  content: ContentProps[];
}
interface ContentProps {
  todo: string;
  checked: boolean;
}
