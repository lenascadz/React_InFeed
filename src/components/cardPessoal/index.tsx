import styles from './styles.module.css';

export default function CardPessoal() {
    return (
        <div className={styles.container}>
            <div className={styles.backgroundImage}></div>
            <div className={styles.fotoPerfil}>
                <img src= "../src/assets/foto_helena.png" alt="Foto pessoal" />
            </div>
            <div className={styles.info}>
                <h2>Helena Scandian Trinta</h2>
                <p>Desenvolvedora Front-End</p>
            </div>
        </div>
    );
}
