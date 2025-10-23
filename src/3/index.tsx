import React, { useState, useMemo, useEffect } from "react"
import Input from "../components/Input"
import List from '../components/List'
import { 
  filterTodosBySearchQuery, 
  addTodo, 
  toggleTodo, 
  deleteTodo, 
  sortTodos
} from './helpers'
import { fetchInitialTodos } from './data'
import type { ItemData as Todo } from '../types'

// Style
import "./index.scss";
import { PencilIcon, SearchIcon } from "../icons"

// Components
/*
 * Create the components you need in the components folder.
 * You may find inspiration in task 2
 */

const Task3: React.FunctionComponent = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [newTodoText, setNewTodoText] = useState('');
  
  useEffect(() => {
    const loadInitialTodos = async () => {
      const initialTodos = await fetchInitialTodos();
      setTodos(initialTodos);
    };
    
    loadInitialTodos();
  }, []);
  
  const filteredTodos = useMemo(() => 
    sortTodos(filterTodosBySearchQuery(todos, searchQuery)), 
    [todos, searchQuery]
  );
  
  const handleAddTodo = (text: string) => {
    if (text.trim()) {
      setTodos(prev => addTodo(prev, text))
      setNewTodoText('')
    }
  };
  
  const handleToggleTodo = (id: string) => 
    setTodos(prev => toggleTodo(prev, String(id)))
  
  const handleDeleteTodo = (id: string) => 
    setTodos(prev => deleteTodo(prev, String(id)))
  
  const handleNewTodoChange = (value: string) => {
    setNewTodoText(value);
  };

  return (
   <div id="task-3">
    <h2 className="app-title">Todo List</h2>
      <div className="todo-inputs">
        <Input 
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search todos..."
          icon={<SearchIcon />}
        />       
      </div>
      <div className="todo-container">
        <List 
          items={filteredTodos}
          searchQuery={searchQuery}
          onToggle={handleToggleTodo}
          onDelete={handleDeleteTodo}
          emptyListMessage="No todos yet"
        />
      </div>
      <div className="add-todo-container">
        <Input 
          value={newTodoText}
          onChange={handleNewTodoChange}
          onAdd={handleAddTodo}
          placeholder="Add a todo..." 
          showAddButton={true} 
          icon={<PencilIcon />}
        />
      </div>
   </div>
  );
};

export default Task3;
