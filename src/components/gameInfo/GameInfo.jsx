import styles from './GameInfo.module.css'

import Icon from '../icon/Icon'
import Button from '../button/Button'

function GameInfo ({ currentPlayer, winner, onRestart }) {

    const shouldEnableButton = () => {
      if (winner !== 0) return true
    }

    return (
        <div className={styles.gameInfo}>
            {
                winner === 0 && 
                  <>
                    <h4>NEXT PLAYER: </h4>
                    {
                    currentPlayer === 1 && <Icon iconName ="circle"/>
                    }

                    {
                    currentPlayer === -1 && <Icon iconName ="x"/>
                    }
                  </>
            }
            {
                winner !== 0 && 
                  <>
                    <h4>END GAME! CHAMPION:</h4>
                    {
                        winner === 1 && <Icon iconName ="circle" />
                    }
                    {
                        winner === -1 && <Icon iconName ="x"/>
                    }
                  </>
            }
            <Button
              onClick={onRestart}
              disabled={!shouldEnableButton()}
            >
              <b>RESTART</b>
            </Button>            
        </div>
    )
}

export default GameInfo