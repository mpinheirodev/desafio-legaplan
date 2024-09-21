"use client"

import styles from '../../styles/styles.module.scss';
import DeleteTaskModal from './deleteTask';

interface TaskCardProps {
  task: {
    id: string;
    content: string;
    done: boolean;
  };
  onDeleteTask: (id: string) => void;
  onDoneTask: (id: string) => void;
}

export default function Task({ task, onDeleteTask, onDoneTask }: TaskCardProps) {
  return (
    <div className={styles.task}>
      <div className={styles.title}>
        <input type="checkbox" checked={task.done} onChange={() => onDoneTask(task.id)}/>
        <p>{task.content}</p>
      </div>
      <DeleteTaskModal task={task} onDeleteTask={onDeleteTask} />
    </div>
  )
}