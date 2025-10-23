import type { ItemData as Todo } from '../../types';

interface TodoApiResponse {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

export const fetchInitialTodos = async (): Promise<Todo[]> => {
  const URL = 'https://jsonplaceholder.typicode.com/todos?_limit=3'

  try {
    const response = await fetch(URL)
    
    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
      return []
    }

    const data = await response.json() as TodoApiResponse[]
    
    if (!data || !Array.isArray(data) || data.length === 0) {
      console.warn("invalid data");
      return []
    }
    
    const initialTodos: Todo[] = data.map((item: TodoApiResponse) => ({
      id: `${item?.id}`,
      text: item?.title,
      completed: item?.completed
    }));
    
    return initialTodos;
  } catch (error) {
    console.error('Failed to fetch initial todos:', error);
    return []
  }
};
