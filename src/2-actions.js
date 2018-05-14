const todos = [];
let nextTodoId = 0;

function addTodo(text) {
  nextTodoId = nextTodoId + 1;
  todos.push({
    id: nextTodoId,
    text: text,
    completed: false
  })
  nextTodoId
}

function toggleTodo(todoId) {
  const foundTodo = todos.find(todo => todo.id = todoId);
  foundTodo.completed = !foundTodo.completed;
}

function dispatch(actionName, actionContent) {
  switch(actionName) {
    case 'ADD_TODO':
      addTodo(actionContent.text);
      break;
    case 'TOGGLE_TODO':
      toggleTodo(actionContent.id);
      break;
  }
}


/////////

class Component {
  onClickAddTodo = (text) => {
    dispatch('ADD_TODO', {
      text: this.refs.addtodo.value
    });
  }

  onClickToggleTodo = (id) => {
    dispatch('TOGGLE_TODO', {
      id: id
    });
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
