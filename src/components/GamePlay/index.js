import {Component} from 'react'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {
  GamePlayBg,
  PopUpBg,
  TriggerButton,
  PopupMsgContainer,
} from './styledComponent'

import Header from '../Header'
import GameView from '../GameView'

class GamePlay extends Component {
  state = {yourChoice: '', opponentChoice: ''}

  render() {
    const {choicesList} = this.props
    const overlayStyles = {
      backgroundColor: 'transparent',
    }
    return (
      <GamePlayBg>
        <Header />
        <GameView choicesList={choicesList} />
        <PopUpBg>
          <Popup
            trigger={<TriggerButton type="button">Rules</TriggerButton>}
            position="left"
            overlayStyles={overlayStyles}
          >
            {close => (
              <PopupMsgContainer>
                <div>
                  <p>React is a popular and widely used programming language</p>
                </div>
                <button type="button" onClick={() => close()}>
                  Close
                </button>
              </PopupMsgContainer>
            )}
          </Popup>
        </PopUpBg>
      </GamePlayBg>
    )
  }
}

export default GamePlay
