import styles from './GameInfo.module.css'

import Icon from '../icon/Icon'
import Button from '../button/Button'

function GameInfo ({ currentPlayer, winner, onRestart, isDraw }) {

    const shouldEnableButton = () => {
      if (winner !== 0) return true
      if (isDraw) return true
    }

    return (
        <div className={styles.gameInfo}>
            {
                !isDraw && winner === 0 && 
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
                !isDraw && winner !== 0 && 
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
            {
              isDraw && <h4>DRAW!!</h4>
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