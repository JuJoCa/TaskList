import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class' 
import TaskForm from '../pure/forms/taskForm';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {

    const defaultTask1 = new Task('Example1','Default description 1',true,LEVELS.NORMAL); //Tarea por defecto
    const defaultTask2 = new Task('Example2','Default description 2',false,LEVELS.URGENT);
    const defaultTask3 = new Task('Example3','Default description 3',true,LEVELS.BLOCKING);

    // Estado del componente
    const [tasks, settasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setloading] = useState(true);

    //Control del componente
    useEffect(() => {
        console.log('Task state has been modified');
        setTimeout(() => {
            setloading(false);
        }, 2000);
        
        return () => {
            console.log('TaskList component is going to unmount...');
        };
    }, [tasks]);

    function completeTask(task) {
        //console.log('Complete this task: ',task);
        const index = tasks.indexOf(task); // para saber el numero de tarea que es
        const tempTask = [...tasks];
        tempTask[index].completed = !tempTask[index].completed;
        settasks(tempTask);
    }

    function removeTask(task) {
        //console.log('Complete this task: ',task);
        const index = tasks.indexOf(task); // para saber el numero de tarea que es
        const tempTask = [...tasks];
        tempTask.splice(index,1);
        settasks(tempTask);
    }

    function addTask(task) {
        //console.log('Complete this task: ',task);
        // const index = tasks.indexOf(task); // para saber el numero de tarea que es
        const tempTask = [...tasks];
        tempTask.push(task)
        settasks(tempTask);
    }

    const Table = () => {
        return(
            <table>
                <thead>
                    <tr>
                        <th scope='col'>Title</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Priority</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => {
                        return (
                            <TaskComponent 
                                key={index} 
                                task={task}
                                complete={completeTask}
                                remove={removeTask}>
                            </TaskComponent>
                            )
                        }
                    )}
                    
                </tbody>
            </table>
        )
    }

    let tasksTable;

    if (tasks.length > 0) {
        tasksTable = <Table></Table>
    }else {
        tasksTable = (
            <div>
                <h3>There are no task to show</h3>
                <h4>Please, create one</h4>
            </div>
        )
    }

    return (
        <div>
            <div className='col-12'>
               <div className='card'>
                    <div className='card-header p-3'>
                        <h5>Your Task:</h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{position: 'relative', height: '400px' }}>
                        { loading ? 
                        (
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        ) : tasksTable }
                    </div>
               </div>
            </div>
            <TaskForm add={addTask} length={tasks.length}></TaskForm> 
        </div>
    );
};


export default TaskListComponent;
