import { Trash } from 'lucide-react';
import styles from '../../styles/styles.module.scss';

export default function Card() {
  return (
    <div className={styles.card}>
      <p className={styles.taskDivision}>Suas tarefas de hoje</p>
      <div>
        <div className={styles.task}>
          <div className={styles.title}>
            <input type="checkbox" name="" id="" />
            <p>Lavar as mãos</p>
          </div>
          <Trash className={styles.icon} />
        </div>
      </div>
    </div>
  )
}