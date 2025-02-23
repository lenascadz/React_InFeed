import styles from './styles.module.css';

export default function CardPostagem () {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.fotoPerfil}>
                    <img src="../src/assets/foto_usuario.png" alt="Foto do usuário" />
                </div>
                <div className={styles.userInfo}>
                    <h2>Thaís Gomes</h2>
                    <p>Designer</p>
                </div>
                <span className={styles.timestamp}>Publicado há 1h</span>
            </div>

            <div className={styles.content}>
                <p>Lorem ipsum</p>
                <p>
                    dolor sit amet. Ex laboriosam dolorem non tempore earum et voluptatem suscipit ut cupiditate nisi
                    est odit voluptates...
                </p>
            </div>

            <div className={styles.feedback}>
                <h3>Deixe seu feedback</h3>
                <textarea placeholder="Escreva um comentário...">Parabéns, lobinho! Continue assim!</textarea>
                <button>Comentar</button>
            </div>
        </div>
    );
}