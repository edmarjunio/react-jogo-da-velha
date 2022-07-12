import styles from './Score.module.css'

import Icon from '../icon/Icon'

function Score ({ scoreX, scoreCircle }) {
    return (
        <>
        <h4>SCOREBOARD:</h4>
        <div className={styles.score}>
            <div className={styles.scoreContent}>
                <Icon iconName="circle"/>
                <h2>{scoreCircle}</h2>
            </div>
            <div className={styles.scoreContent}>
                <Icon iconName="x"/>
                <h2>{scoreX}</h2>
            </div>
        </div>
        </>
    )
}

export default Score