import React, { useState, useEffect } from "react"
import Input from "../components/Input"
import List from '../components/List'
import { 
  filterTodosBySearchQuery, 
  generateTodoId,
  toggleTodo, 
  deleteTodo, 
} from './helpers'
import { fetchInitialTodos } from './data'
import type { ItemData as Todo } from '../types'

// Style
import "./index.scss";

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
      try {
        const initialTodos = await fetchInitialTodos()
        setTodos(initialTodos)
      } catch (error) {
        console.error('Failed to load initial todos:', error)
        setTodos([])
      }
    }
    
    loadInitialTodos()
  }, [])
  
  const handleAddTodo = (text: string) => {
    if (text.trim()) {
      const id = generateTodoId();
      setTodos(prev => [{ id, text, completed: false }, ...prev]);
      setNewTodoText('');
    }
  };
  
  const handleToggleTodo = (id: string) => 
    setTodos(prev => toggleTodo(prev, id))
  
  const handleDeleteTodo = (id: string) => 
    setTodos(prev => deleteTodo(prev, id))

  return (
   <div id="task-3">
    <h2 className="title">Todo List</h2>
      <div className="todo-inputs">
        <Input 
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search todos..."
          icon="🔍"
        />       
      </div>
      <div className="todo-container">
        <List 
          items={filterTodosBySearchQuery(todos, searchQuery)}
          searchQuery={searchQuery}
          onToggle={handleToggleTodo}
          onDelete={handleDeleteTodo}
          emptyListMessage="No todos yet"
        />
      </div>
      <div className="add-todo-container">
        <Input 
          value={newTodoText}
          onChange={setNewTodoText}
          onAdd={handleAddTodo}
          placeholder="Add a todo..." 
          showAddButton={true} 
          icon="✏️" 
        />
      </div>
   </div>
  );
};

export default Task3;
