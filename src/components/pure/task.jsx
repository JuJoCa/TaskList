import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class'

import '../../styles/task.css'
import { LEVELS } from '../../models/levels.enum';


const TaskComponent = ({ task, complete, remove }) => {

    useEffect(() => {
        console.log('Create Task');
        return () => {
            console.log(`Task: ${task.name} is going to unmount...`)
        };
    }, [task]);

    function taskLevelBadge() {
        switch (task.level) {
            case LEVELS.NORMAL:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-primary'>{task.level}</span>
                </h6>)
            case LEVELS.URGENT:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-warning'>{task.level}</span>
                </h6>)
            case LEVELS.BLOCKING:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-danger'>{task.level}</span>
                </h6>)    
            default:
                break;
        }
    }

    function taskIconCompleted() {
        if(task.completed) {
            return (<i onClick={() => complete(task)} className="bi-toggle-on task-action" style={{color: 'green', fontWeight: 'bold'}}></i>)
        }else {
            return (<i onClick={() => complete(task)} className="bi-toggle-off task-action" style={{color: 'grey'}}></i>)
        }
    }

    return (
        <tr className={task.completed ? 'fw-normal task-complete' : 'fw-normal task-pending'}>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span>{task.description}</span>
            </td>
            <td className='align-middle'>
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                {taskIconCompleted()}
                <i className="bi-trash task-action" style={{color: 'tomato'}} onClick={() => remove(task)}></i>
            </td>
        </tr>
        // <div>
        //     <h2 className='task-name'>Name: { task.name }</h2>
        //     <h3>Description: { task.description }</h3>
        //     <h4>Level: { task.level }</h4>
        //     <h5>This task is: {task.completed ? 'COMPLETED' : 'PENDING'}</h5>
        // </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;
