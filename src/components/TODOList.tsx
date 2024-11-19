interface TODOListProps {
  todos: {
    id: number;
    task: string;
    completed: boolean;
  }[];
}

function TODOList({ todos }: TODOListProps) {
  return <ol className="todo_list">
    
  </ol>;
}
export default TODOList;
