import todoLogo from '../assets/todoLogo.svg';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.container}>
      <img src={todoLogo} alt='logo to-do' />
    </header>
  );
}
