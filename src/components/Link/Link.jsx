import { Link } from 'react-router-dom'
import styles from './Link.module.scss'
export default ({ router = false, style = false, href, children }) => {
    const RouterLink = () => <Link
        to={href}
        className={`
            ${styles.link} 
            ${style ? styles['link_' + style] : ''}
        `}
    >
        {children}
    </Link>
    
    const ExternalLink = () => <a
        href={href}
        className={`
            ${styles.link} 
            ${style ? styles['link_' + style] : ''}
        `}
    >
        {children}
    </a>
    
    return router ? <RouterLink/> : <ExternalLink/>
}