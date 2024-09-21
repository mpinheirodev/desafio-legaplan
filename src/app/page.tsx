"use client"

import styles from './styles/styles.module.scss';
import Task from './components/task';
import Header from './components/header';
import { useState } from 'react';
import { NewTask } from './components/task/newTask';

interface Task {
  id: string;
  content: string;
  done: boolean;
}


export default function Home() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const tasksOnStorage = localStorage.getItem("tasks");

    if (tasksOnStorage) {
      return JSON.parse(tasksOnStorage);
    }

    return [];
  });

  const [tasksDone, setTaskDone] = useState<Task[]>(() => {
    const tasksDoneonStorage = localStorage.getItem("tasksDone");

    if (tasksDoneonStorage) {
      return JSON.parse(tasksDoneonStorage);
    }

    return [];
  })

  function onTaskCreated(content: string) {
    const newTask = {
      id: crypto.randomUUID(),
      content,
      done: false,
    };

    // adiciona tasks no array
    const tasksArray = [newTask, ...tasks];
    // atualiza o estado das tasks
    setTasks(tasksArray);
    // salva as tasks no localStorage
    localStorage.setItem("tasks", JSON.stringify(tasksArray));
  }

  function onDoneTask(id: string) {
    const taskDone = tasks.find((task) => {
      if(task.id === id) {
        task.done = !task.done;
        return task;
      }
      return;
    })
    
    if(!taskDone) return;

    // adiciona task no array
    const tasksDoneArray = [taskDone, ...tasksDone];
    // atualiza o estado das tasks
    setTaskDone(tasksDoneArray);
    localStorage.setItem("tasksDone", JSON.stringify(tasksDoneArray));

    onDeleteTask(taskDone.id);
  }
  
  function onDeleteTask(id: string) {
    const tasksArray = tasks.filter((task) => {
      return task.id !== id;
    });
    
    setTasks(tasksArray);
    localStorage.setItem("tasks", JSON.stringify(tasksArray));
  }

  
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.card}>
            <p className={styles.taskDivision}>Suas tarefas de hoje</p>
            {tasks.map((task) => {
              return <Task key={task.id} task={task} onDeleteTask={onDeleteTask} onDoneTask={onDoneTask}/> 
            })}

            <p className={styles.taskDivision}>Tarefas finalizadas</p>
            {tasksDone.map((task) => {
              return <Task key={task.id} task={task} onDeleteTask={onDeleteTask} onDoneTask={onDoneTask}/> 
            })}
          </div>
          <NewTask onTaskCreated={onTaskCreated} />
        </div>
      </div>
    </div>
  );
}
