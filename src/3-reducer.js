let state = [];

// REDUCER
function reducer(state = [], action) {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
      break;
    default:
      return state;
  }
}

// ACTIONS
const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})
​
const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
});

// Dispatcher
function dispatch(action) {
  state = reducer(state, action);
}

/**
 * currentState = [action, action, action].reduce(reducer, initialState)
 */


/////////

class Component {
  onClickAddTodo = (text) => {
    dispatch(addTodo(text));
  }

  onClickToggleTodo = (id) => {
    dispatch(toggleTodo(id));
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
