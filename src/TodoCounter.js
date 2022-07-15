import React from 'react';
import './TodoCounter.css';






const TodoCounter = () => {
    return (
        <div className="todo-counter">
        <ul>
            <li>You have achieved 2 out of 3 ToDo</li>
            <li>completed 70%</li>
            <li>to do 30%</li>
        </ul>
        </div>
        
    );
}

export { TodoCounter };