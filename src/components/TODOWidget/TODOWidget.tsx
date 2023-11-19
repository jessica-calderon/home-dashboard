import React from 'react';

const ToDoWidget: React.FC = () => {
    // Placeholder for to-do items
    const todos = [
        { id: 1, text: 'Read a book' },
        { id: 2, text: 'Finish this' }
    ];

    return (
        <div className="p-4 rounded bg-yellow-500 text-white">
            <div className="text-xl font-bold mb-2">To-Do List</div>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} className="mb-1">{todo.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoWidget;
