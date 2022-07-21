import React from 'react';
import './TodoCounter.css';






const TodoCounter = () => {
    return (
        <div className="todo-counter">
        <ul className='list'>
            <li className='list1'>You have achieved 2 out of 3 ToDo</li>
            <li className='list2'>completed 70%</li>
            <li className='list3'>to do 30%</li>
        </ul>
        </div>
        
    );
}

export { TodoCounter };