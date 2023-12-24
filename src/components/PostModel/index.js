import PostsCards from "components/PostsCards"
import styles from "./PostModel.module.css"

export default function PostModel( {FotoCapa, Titulo, children } ){
    return(
        <>
            <article className={styles.postModeloContainer} >
                <div className={styles.fotoCapa} style={{backgroundImage:`url(${FotoCapa})`}}/>
                <h2 className={styles.titulo}>{Titulo}</h2>
                <div className={styles.postConteudoContainer}>{children}</div>
            </article>


        </>    
    )
}