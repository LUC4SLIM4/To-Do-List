import styles from './Header.module.css'
import rocketLogo from '../assets/rocket.svg'


export function Header() {
    return(
    <div>
        <header className={styles.container}>
            <img src={rocketLogo} alt="Logo do Header" />
        </header>
    </div>
    )
}