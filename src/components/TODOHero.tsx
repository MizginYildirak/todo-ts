import "../styles/TODOHero.css";

interface TODOHeroProps {
  todos_completed: number;
  total_todos: number;
}

function TODOHero({ todos_completed, total_todos }: TODOHeroProps) {




  return (
    <section className="todohero_section">
      <div>
        <p>Task Done</p>
        <p>Keep it up</p>
      </div>
      <div>numbers</div>
    </section>
  );
}
export default TODOHero;
