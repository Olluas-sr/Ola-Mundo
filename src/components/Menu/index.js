import styles from "./Menu.module.css"
import LinkMenu from "../LinkMenu";


export default function Menu () {
    return(
        <header className={styles.header} >
            <nav className={styles.nav}>
                <LinkMenu to="/" > 
                    Inicio
                </LinkMenu>
                <LinkMenu to="/AboutMyself"> 
                    Sobre Mim
                </LinkMenu>

            </nav>
        </header>   
    )
    
}