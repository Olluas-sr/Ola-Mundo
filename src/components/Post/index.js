import "./Post.css"
import { Route, Routes, useParams } from "react-router-dom"
import posts from "json/posts.json"
import PostModel from "components/PostModel";
import Markdown from "react-markdown";
import StandartPage from "components/StandartPage";

export default function Post () {
    const parametros= useParams()

    const post = posts.find((post)=> {
        return post.id === Number(parametros.id);
    })

    if(!post){
        return <h1>Post nao econtrado...</h1>
            
    }

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
                    
                            </PostModel>
                            }
                />

            </Route>
        </Routes>
    )
}