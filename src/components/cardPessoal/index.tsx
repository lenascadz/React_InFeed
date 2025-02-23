// import styles from './styes.module.css';

// export default function CardPessoal() {
//     return (
//         <div className={styles.container}>
//             <div>
//                 <img src= "../assets/foto_helena.jpeg" alt="fotopessoal" />
//             </div>
//             <div className={styles.info}>
//                 <div>
//                     <h3>Helena Scandian Trinta</h3>
//                 </div>
//                 <div>
//                     <p>Desenvolvedora Front-End</p>
//                 </div>
//             </div>
//         </div>
//     );
// }


import styles from './styles.module.css';

export default function CardPessoal() {
    return (
        <div className={styles.container}>
            <div className={styles.backgroundImage}></div>
            <div className={styles.fotoPerfil}>
                <img src= '../src/assets/foto_helena.png' alt="Foto pessoal" />
            </div>
            <div className={styles.info}>
                <h2>Helena Scandian Trinta</h2>
                <p>Desenvolvedora Front-End</p>
            </div>
        </div>
    );
}
