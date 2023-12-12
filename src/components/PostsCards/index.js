import { Link } from "react-router-dom"
import styles from "./PostCard.module.css"
import MainButton from "components/MainButton"
export default function PostsCards ( { post } ) {
    return (
        <Link to={`/post/${post.id}`}>
            <div className={styles.post}>
                <img
                className={styles.capa}
                src={require(`assets/posts/${post.id}/capa.png`)}
                alt="Foto da capa do post"
                />
                <h2 className={styles.titulo}>{post.titulo}</h2>
                <MainButton> Ler </MainButton>
            </div>
        </Link>
    )
    }