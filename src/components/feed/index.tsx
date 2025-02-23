import styles from "./styles.module.css";
import CardPessoal from "../cardPessoal";
import CardPost from "../cardPost";

export default function Feed() {
    return (
        <div className={styles.feedContainer}>
            <CardPessoal />
            <div className = {styles.postContainer}>
                {/* Primeiro cardPost */}
                    <CardPost 
                        nome="Thaís Gomes"
                        cargo="Designer"
                        tempo="Publicado há 1h"
                        conteudo={`Lorem ipsum dolor sit amet.
    
                        Ex laboriosam dolorem non tempore earum et voluptatem suscipit ut cupiditate nisi est odit voluptates. Nam magni amet ut ipsam molestiae aut facilis minus et quia reiciendis sed excepturi rerum ex consequatur minima! Ex rerum sunt et incidunt officia et veritatis deserunt. Sit soluta laboriosam et incidunt sequi et eius fugiat est temporibus similique rem illum natus sit unde eveniet. 
                        
                        Non quos omnis ut autem labore nam vero consequatur est porro similique ad adipisci quisquam!`}
                        fotoPerfil=""   
                    />
                {/* Segundo cardPost */}
                    <CardPost
                        nome="Ricardo Siqueira"
                        cargo="Dev Back-end"
                        tempo="Publicado há 1h"
                        conteudo="Lorem ipsum dolor sit amet. Ex laboriosam dolorem non tempore earum et voluptatem suscipit ut cupiditate nisi est odit voluptates. Nam magni amet ut ipsam molestiae aut facilis minus et quia reiciendis sed excepturi rerum ex consequatur minima! Ex rerum sunt et incidunt officia et veritatis deserunt. Sit soluta laboriosam et incidunt sequi et eius fugiat est temporibus similique rem illum natus sit unde eveniet. Non quos omnis ut autem labore nam vero consequatur est porro similique ad adipisci quisquam!"
                        fotoPerfil="../src/assets/foto_usuario2.png"/>
            </div>        
        </div>
    );
}
