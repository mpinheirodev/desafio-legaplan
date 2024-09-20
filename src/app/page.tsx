import styles from './styles/styles.module.scss';
import Card from './components/card';
import Header from './components/header';

export default function Home() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>
          <Card />
          <button>Adicionar nova tarefa</button>
        </div>
      </div>
    </div>
  );
}
