import { useState, ChangeEvent } from 'react';

interface Todo {
  text: string;
  completed: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>('');

  const addTodo = () => {
    if (input.trim() === '') return;
    setTodos([...todos, { text: input, completed: false }]);
    setInput('');
  };

  const toggleTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const removeTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Packing-list</h1>
      <ul>
        <li>노트북
          <ul>
            <li>노트북</li>
            <li>노트북 충전기</li>
            <li>마우스</li>
            <li>마우스 패드</li>  
            <li>이어폰</li>
          </ul>
        </li>
        <li>
          갤럭시 탭
          <ul>
            <li>갤럭시 탭</li>
            <li>충전기</li>
            <li>무선이어폰</li>
            <li>S펜</li>
          </ul>
        </li>
        <li>
          스마트폰
        </li>
        <li>지갑</li>
        <li>
          필기구
          <ul>
            <li>노트</li>
            <li>필통</li>
          </ul>
        </li>

      </ul>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Add a new task"
        style={{ padding: '10px', fontSize: '16px', marginRight: '10px' }}
      />
      <button onClick={addTodo} style={{ padding: '10px 20px', fontSize: '16px' }}>Add</button>
      <ul style={{ padding: '20px 0', listStyleType: 'none' }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(index)}
              style={{ marginRight: '10px' }}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', flexGrow: 1 }}>{todo.text}</span>
            <button onClick={() => removeTodo(index)} style={{ marginLeft: '10px', padding: '5px 10px' }}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
