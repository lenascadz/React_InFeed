import styles from "./styles.module.css";
import CardPessoal from "../cardPessoal";
import CardPost from "../cardPost";

const nomeUsuario = "Helena Scandian Trinta";
const fotoUsuario = "../src/assets/foto_helena.png";

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
                        conteudo={`<br /><br /><br /> Lorem ipsum dolor sit amet.<br />
                        <br /> Ex laboriosam dolorem non tempore earum et voluptatem suscipit ut cupiditate nisi est odit voluptates. Nam magni amet ut ipsam molestiae aut facilis minus et quia reiciendis sed excepturi rerum ex consequatur minima! Ex rerum sunt et incidunt officia et veritatis deserunt. Sit soluta laboriosam et incidunt sequi et eius fugiat est temporibus similique rem illum natus sit unde eveniet. <br />
                        
                        <br /> Non quos omnis ut autem labore nam vero consequatur est porro similique ad adipisci quisquam!<br /><br /><br />`} 
                        fotoPerfil="../src/assets/fotoPerfil_Leticia.png"
                        nomeUsuario={nomeUsuario}
                        fotoUsuario={fotoUsuario} />

                {/* Segundo cardPost */}
                    <CardPost
                        nome="Rodrigo Marques"
                        cargo="Advogado"
                        tempo="Publicado há 1h"
                        conteudo={`<br /><br /><br /> Lorem ipsum dolor sit amet.<br />
                            <br /> Ex laboriosam dolorem non tempore earum et voluptatem suscipit ut cupiditate nisi est odit voluptates. Nam magni amet ut ipsam molestiae aut facilis minus et quia reiciendis sed excepturi rerum ex consequatur minima! Ex rerum sunt et incidunt officia et veritatis deserunt. Sit soluta laboriosam et incidunt sequi et eius fugiat est temporibus similique rem illum natus sit unde eveniet. <br />
                            
                        
                            <br /> Non quos omnis ut autem labore nam vero consequatur est porro similique ad adipisci quisquam!<br /><br /><br />`}
                        fotoPerfil="../src/assets/fotoPerfil_Rodrigo.png"
                        nomeUsuario={nomeUsuario}
                        fotoUsuario={fotoUsuario} />
            </div>        
        </div>
    );
}
