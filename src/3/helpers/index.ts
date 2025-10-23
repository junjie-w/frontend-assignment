import type { ItemData as Todo } from '../../types';

export const generateTodoId = (): string => {
  return `t-${Date.now()}`
}

export const filterTodosBySearchQuery = (todos: Todo[], searchQuery: string): Todo[] => {
  if (!searchQuery.trim()) return todos
  
  const query = searchQuery.toLowerCase().trim()
  return todos.filter(todo => 
    todo.text.toLowerCase().includes(query)
  )
}

export const addTodo = (todos: Todo[], text: string): Todo[] => {
  const id = generateTodoId();
  return [{ id, text, completed: false }, ...todos];
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
