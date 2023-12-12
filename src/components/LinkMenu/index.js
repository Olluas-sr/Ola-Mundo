import { NavLink } from "react-router-dom"
import styles from "./LinkMenu.module.css"

export default function LinkMenu({children, to}) {
    
    return(
            <NavLink to={to} 
                    className={({isActive}) =>`
                    ${styles.link}
                    ${isActive ? styles.linkDestacado : ""}
                `}
                end
            >
                {children}
            </NavLink>
        )
}