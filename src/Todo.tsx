import React, { useState } from "react";

// Define a type for the Todo item
type Todo = {
  id: number; // Unique ID for each todo item
  text: string; // Text content of the todo
  completed: boolean; // Whether the task is completed
};

// React Functional Component
const TodoApp: React.FC = () => {
  // State to store the list of todos
  const [todos, setTodos] = useState<Todo[]>([]);

  // State to store the input field value
  const [newTodo, setNewTodo] = useState<string>("");

  // Function to add a new todo item
  const addTodo = () => {
    if (!newTodo.trim()) return; // Prevent adding empty todo items

    // Create a new todo object
    const newTask: Todo = {
      id: Date.now(), // Generate unique ID using timestamp
      text: newTodo, // Use the input value
      completed: false, // Default to not completed
    };

    // Update the state with the new todo
    setTodos([...todos, newTask]);

    // Clear the input field after adding
    setNewTodo("");
  };

  // Function to toggle the completion status of a todo item
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to delete a todo item
  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-gray-800 text-white rounded-lg shadow-md">
      {/* Input section for adding a new todo */}
      <h1 className="text-xl font-bold mb-2">Create Item for Todo list</h1>
      <div className="mb-4">
        <input
          type="text"
          className="w-full p-2 border border-gray-400 rounded bg-gray-700 text-white focus:outline-none focus:border-blue-500"
          placeholder="New Item"
          value={newTodo} // Controlled component
          onChange={(e) => setNewTodo(e.target.value)} // Update state on change
        />
        <button
          className="w-full mt-2 p-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded"
          onClick={addTodo} // Call addTodo function when clicked
        >
          Add Item
        </button>
      </div>

      {/* Todo List Section */}
      <h1 className="text-xl font-bold mb-2">Todo List</h1>
      <ul className="space-y-2">
        {todos.map(todo => (
          <li key={todo.id} className="flex items-center justify-between p-2 bg-gray-700 rounded">
            {/* Checkbox and Task Label */}
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={todo.completed} // Bind checkbox to completed state
                onChange={() => toggleTodo(todo.id)} // Toggle completed state on click
                className="w-5 h-5"
              />
              <span className={todo.completed ? "line-through text-gray-400" : ""}>
                {todo.text} {/* Display the todo text */}
              </span>
            </label>

            {/* Delete Button */}
            <button
              className="p-2 bg-red-600 hover:bg-red-700 text-white rounded"
              onClick={() => deleteTodo(todo.id)} // Call deleteTodo function
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
