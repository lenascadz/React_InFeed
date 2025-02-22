import styles from './styles.module.css';

export default function Header() {
  return (
     <header className={styles.header} >
      <div className={styles.logos}>
        <img src="../public/Logo1.png" alt="logo" />
        <h1> Feed </h1>
      </div>
      
    </header>
  );
}