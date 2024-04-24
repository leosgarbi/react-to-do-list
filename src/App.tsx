import { PlusCircle } from '@phosphor-icons/react';
import styles from './App.module.css';
import { Button } from './components/Button';
import { Header } from './components/Header';
import { Input } from './components/Input';
import './global.css';

export function App() {
  return (
    <main>
      <Header />

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input />
          <Button>
            Click
            <PlusCircle size={16} color='#f2f2f2' weight='bold' />
          </Button>
        </div>

        <div className={styles.tasksList}>
          <div>Class list</div>
        </div>
      </section>
    </main>
  );
}
