import react from 'react';
import './App.css';
import './responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css'

// components

import TodoList from './components/TodoList';
function App() {
  return (
    <div className="App">
        <TodoList></TodoList>
    </div>
  );
}

export default App;
