
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



function createStore(reduceFunc, state) {
  let listeners = [];

  function dispatch(action) {
    state = reducerFunc(state, action);
    listeners.forEach(listener => listener());
  }

  function getState() {
    return state;
  }

  function subscribe(func) {
    const index = listeners.push(func) - 1;

    return function() {
      listeners.splice(index, 1);
    };
  }

  return {
    dispatch,
    getState,
    subscribe
  }
};

const store = createStore(reducer, []);

// Dispatcher

/**
 * currentState = [action, action, action].reduce(reducer, initialState)
 */


/////////

class Component {
  constructor() {
    this.unsubscribe = store.subscribe(this.render(todos));
  }

  beforeDelete() {
    this.unsubscribe();
  }

  onClickAddTodo = (text) => {
    store.dispatch(addTodo(text));
  }

  onClickToggleTodo = (id) => {
    store.dispatch(toggleTodo(id));
  }

  render(todos) {
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
