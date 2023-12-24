import "./Post.css"
import styles from "./Post.module.css"
import { Route, Routes, useParams } from "react-router-dom"
import posts from "json/posts.json"
import PostModel from "components/PostModel";
import Markdown from "react-markdown";
import StandartPage from "components/StandartPage";
import PostsCards from "components/PostsCards";


export default function Post () {
    const parametros= useParams()

    const post = posts.find((post)=> {
        return post.id === Number(parametros.id);
    })

    if(!post){
        return <h1>Post nao econtrado...</h1>   
    }

    const RecomendedPost = posts
        .filter((post) => post.id !== Number(parametros.id))
        .sort((a,b) => a.id - b.id)
        .slice(0, 4);

    const fotocapa = require(`assets/posts/${post.id}/capa.png`)

    return(
        <Routes>
            <Route path="*" element={<StandartPage/>}>
                <Route index element={
                            <PostModel
                            FotoCapa={fotocapa}
                            Titulo={post.titulo}
                            >
                            <div className="post-markdown-container">
                                <Markdown>
                                    {post.texto}
                                </Markdown>
                            </div>

                            <h2 className={styles.tituloOutrosPosts}>
                                Outros posts que voce pode gostar:
                            </h2>

                            <ul className={styles.postsRecomendados}>
                                {RecomendedPost.map((post) => (
                                    <li key={post.id}>
                                        <PostsCards post={post}/>
                                    </li>
                                ))}
                            </ul>            
                            </PostModel>
                            }
                />

            </Route>
        </Routes>
    )
}