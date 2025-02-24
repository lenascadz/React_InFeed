import { useState } from "react";
import styles from "./styles.module.css";

interface Comment {
  id: number;
  author: string;
  text: string;
  likes: number;
  foto: string;
}

interface CardPostagensProps {
  nome: string;
  cargo: string;
  tempo: string;
  conteudo: string;
  fotoPerfil: string;
  nomeUsuario: string;
  fotoUsuario: string;
}

export default function CardPostagens({
  nome,
  cargo,
  tempo,
  conteudo,
  fotoPerfil,
  nomeUsuario,
  fotoUsuario
}: CardPostagensProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");

  // Adicionar comentário
  const handleAddComment = () => {
    if (newComment.trim() === "") return;

    const newCommentObject: Comment = {
      id: Date.now(),
      author: nomeUsuario,
      text: newComment,
      likes: 0,
      foto: fotoUsuario,
    };

    setComments([...comments, newCommentObject]);
    setNewComment("");
  };

  // Deletar comentário
  const handleDeleteComment = (id: number) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  // Adicionar curtida
  const handleLikeComment = (id: number) => {
    setComments(
      comments.map((comment) =>
        comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
      )
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img className={styles.fotoPerfil} src={fotoPerfil} alt={`Foto de ${nome}`} />
        <div className={styles.userInfo}>
          <h2>{nome}</h2>
          <p>{cargo}</p>
        </div>
        <span className={styles.timestamp}>{tempo}</span>
      </div>

      <div className={styles.content}>
        <p dangerouslySetInnerHTML={{ __html: conteudo }} />
      </div>

      {/* Seção de Comentários */}
      <div className={styles.feedback}>
        <h3>Deixe seu feedback</h3>
        <textarea
          placeholder="Escreva um comentário..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={handleAddComment}>Comentar</button>

        {/* Exibir os comentários dinâmicos */}
        {comments.map((comment) => (
          <div key={comment.id} className={styles.commentContainer}>
            <img className={styles.commentFoto} src={comment.foto} alt={`Foto de ${comment.author}`} />
            <div className={styles.commentCard}>
              <p><strong>{comment.author}</strong></p>
              <p>{comment.text}</p>
              <div className={styles.commentActions}>
                <button onClick={() => handleLikeComment(comment.id)}>👍 Like ({comment.likes})</button>
                <button onClick={() => handleDeleteComment(comment.id)}>🗑️</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
