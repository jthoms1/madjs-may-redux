const todos = [];
let nextTodoId = 0;

function addTodo(text) {
  nextTodoId = nextTodoId + 1;
  todos.push({
    id: createUniqueId(),
    text: text,
    completed: false
  })
}

function toggleTodo(todoId) {
  const foundTodo = todos.find(todo => todo.id = todoId);
  foundTodo.completed = !!foundTodo.completed;
}

/////////

class Component {
  onClickAddTodo = () => {
    addTodo(this.refs.addtodo.value);
  }

  onClickToggleTodo = (id) => {
    toggleTodo(id);
  }

  render() {
    return (
      <div>
        {todos.map(todo => (
          <div
            onClick={onClickAddTodo}
            className={todo.completed ? 'complete' : 'incomplete'}>
            {text}
          </div>
        ))};
        <label>
          Add Todo
          <input ref='addtodo' type="text" placeholder="Todo Text" />
          <button onClick={onClickAddTodo} />
        </label>
      </div>
    );
  }
}
