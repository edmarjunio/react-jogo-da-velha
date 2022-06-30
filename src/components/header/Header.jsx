import styles from './Header.module.css'

import Title from '../title/Title'
import Subtitle from '../subtitle/Subtitle'

function Header () {
    return (
        <div className={styles.header}>
        <Title>TIC-TAC-TOE</Title>
        <Subtitle>created by Edmar Júnio</Subtitle>
        </div>
    )
}

export default Header