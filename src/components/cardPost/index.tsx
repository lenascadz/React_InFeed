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
                <br></br> <p>  Lorem ipsum</p> 
                <p>dolor sit amet. Ex laboriosam dolorem non tempore earum et voluptatem suscipit ut cupiditate nisi est odit voluptates. Nam magni amet ut ipsam molestiae aut facilis minus et quia reiciendis sed excepturi rerum ex consequatur minima! Ex rerum sunt et incidunt officia et veritatis deserunt. Sit soluta laboriosam et incidunt sequi et eius fugiat est temporibus similique rem illum natus sit unde eveniet. 
                Non quos omnis ut autem labore nam vero consequatur est porro similique ad adipisci quisquam!
                </p> <br></br>
            </div>

            <div className={styles.feedback}>
                <h3>Deixe seu feedback</h3> <br></br>
                <textarea placeholder="Escreva um comentário...">Parabéns, lobinho! Continue assim!</textarea> <br></br> <br></br>
                <button>Comentar</button>
            </div>
        </div>
    );
}