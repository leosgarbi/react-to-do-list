import styles from './App.module.css';
import { Header } from './components/Header';
import './global.css';

export function App() {
  return (
    <main>
      <Header />

      <section className={styles.content}>
        <div></div>
      </section>
    </main>
  );
}
