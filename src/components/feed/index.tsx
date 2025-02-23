import styles from "./styles.module.css";
import CardPessoal from "../cardPessoal";
import CardPost from "../cardPost";

export default function Feed() {
    return (
        <div className={styles.feedContainer}>
            <CardPessoal />
            <CardPost />
        </div>
    );
}
