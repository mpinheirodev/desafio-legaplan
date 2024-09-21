"use client"

import styles from './styles/styles.module.scss';
import Task from './components/task/task';
import Header from './components/header';
import { useEffect, useState } from 'react';
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

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])

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
  }

  function onDoneTask(id: string) {
    const taskDone = tasks.map((task) => {
      if(task.id === id) {
        task.done = !task.done;
      }
      return task;
    })
    
    // atualiza o estado das tasks
    setTasks(taskDone)
  }

  function onDeleteTask(id: string) {
    const tasksArray = tasks.filter((task) => {
      return task.id !== id;
    });
    
    setTasks(tasksArray);
  }

  
  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.card}>
            <p className={styles.taskDivision}>Suas tarefas de hoje</p>
            {(tasks.filter((task) => (task.done === false)).length > 0) ? tasks.filter((task) => (task.done === false)).map((task) => {
              return <Task key={task.id} task={task} onDeleteTask={onDeleteTask} onDoneTask={onDoneTask}/> 
            }) : <p>Nenhuma tarefa cadastrada</p>}

            <p className={styles.taskDivision}>Tarefas finalizadas</p>
            {(tasks.filter((task) => (task.done === true)).length > 0) ? tasks.filter((task) => (task.done === true)).map((task) => {
              return <Task key={task.id} task={task} onDeleteTask={onDeleteTask} onDoneTask={onDoneTask}/> 
            }) : <p>Nenhuma tarefa cadastrada</p>}
          </div>
          <NewTask onTaskCreated={onTaskCreated} />
        </div>
      </div>
    </div>
  );
}
