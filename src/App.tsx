import { PlusCircle } from '@phosphor-icons/react';
import { Trash } from '@phosphor-icons/react/dist/ssr';
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
        <div className={styles.container}>
          <Input />
          <Button>
            Click
            <PlusCircle size={16} color='#f2f2f2' weight='bold' />
          </Button>
        </div>

        <div className={styles.tasksList}>
          <header className={styles.headerContent}>
            <aside>
              Tarefas criadas <span>0</span>
            </aside>
            <aside>
              Concluídas <span>2 de 5</span>
            </aside>
          </header>

          {/* <div className={styles.dividerLine} /> */}

          <div className={styles.taskListWrapper}>
            <div className={styles.taskListContent}>
              <input type='checkbox' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              <Trash color={'var(--gray-300)'} />
            </div>
          </div>
          <div className={styles.taskListWrapper}>
            <div className={styles.taskListContent}>
              <input type='checkbox' />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
                perferendis voluptatem iure ea pariatur consectetur?
              </p>
              <Trash color={'var(--gray-300)'} />
            </div>
          </div>
          <div className={styles.taskListWrapper}>
            <div className={styles.taskListContent}>
              <input type='checkbox' />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                reprehenderit voluptate nemo ullam facere mollitia. Sint officia
                delectus deleniti laboriosam blanditiis natus porro?
                Perspiciatis accusantium officiis ad in at ex? Est, rerum.
              </p>
              <Trash color={'var(--gray-300)'} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
