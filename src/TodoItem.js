import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './TodoItem.css'

const TodoItem = (props) => {
    return (
        <li className='TodoItem'>
            <span className='circle-check'>
            <FontAwesomeIcon icon={faCircleCheck}  />
            </span>
            <p className='TodoItem-p'>{props.text}</p>
            <span className='delete-icon'>
            <FontAwesomeIcon icon={faTrash} />
            </span>
            
        </li>
    );
}

export  { TodoItem };