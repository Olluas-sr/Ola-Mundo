import PostsCards from "components/PostsCards";
import styles from "./Home.module.css"
import posts from "json/posts.json"


export default function Home() {
    return(
        <main>
            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                        <PostsCards post={post} /> 
                    </li>
                ))}
            </ul>
        </main>
    )
}

