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
                        nome="Leticia Freitas"
                        cargo="Publicitária"
                        tempo="Publicado há 1h"
                        conteudo={`<br /> Lorem ipsum dolor sit amet.<br />
                        <br /> Ex laboriosam dolorem non tempore earum et voluptatem suscipit ut cupiditate nisi est odit voluptates. Nam magni amet ut ipsam molestiae aut facilis minus et quia reiciendis sed excepturi rerum ex consequatur minima! Ex rerum sunt et incidunt officia et veritatis deserunt. Sit soluta laboriosam et incidunt sequi et eius fugiat est temporibus similique rem illum natus sit unde eveniet. <br />
                        
                    
                        <br /> Non quos omnis ut autem labore nam vero consequatur est porro similique ad adipisci quisquam!<br /><br />`}
                        fotoPerfil="../scr/assets/fotoPerfil_Letica.png" />

                {/* Segundo cardPost */}
                    <CardPost
                        nome="Rodrigo Marques"
                        cargo=" Advogado"
                        tempo="Publicado há 1h"
                        conteudo={`<br /> Lorem ipsum dolor sit amet.<br />
                            <br /> Ex laboriosam dolorem non tempore earum et voluptatem suscipit ut cupiditate nisi est odit voluptates. Nam magni amet ut ipsam molestiae aut facilis minus et quia reiciendis sed excepturi rerum ex consequatur minima! Ex rerum sunt et incidunt officia et veritatis deserunt. Sit soluta laboriosam et incidunt sequi et eius fugiat est temporibus similique rem illum natus sit unde eveniet. <br />
                            
                        
                            <br /> Non quos omnis ut autem labore nam vero consequatur est porro similique ad adipisci quisquam!<br /> <br />`}
                        fotoPerfil="../src/assets/fotoPerfil_Rodrigo.png"/>
            </div>        
        </div>
    );
}
