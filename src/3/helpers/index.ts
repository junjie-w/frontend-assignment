import { v4 as uuidv4 } from 'uuid';
import type { ItemData as Todo } from '../../types';

export const generateTodoId = (): string => {
  return uuidv4();
}

export const filterTodosBySearchQuery = (todos: Todo[], searchQuery: string): Todo[] => {
  if (!searchQuery.trim()) return todos
  
  const query = searchQuery.toLowerCase().trim()
  return todos.filter(todo => 
    todo.text.toLowerCase().includes(query)
  )
}

export const toggleTodo = (todos: Todo[], id: string): Todo[] => {
  return todos.map(todo => 
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  )
}

export const deleteTodo = (todos: Todo[], id: string): Todo[] => {
  return todos.filter(todo => todo.id !== id)
}

export const sortTodos = (todos: Todo[]): Todo[] => {
  return [...todos].sort((a, b) => {
    if (a?.completed === b?.completed) return 0;
    return a.completed ? 1 : -1;
  });
}
