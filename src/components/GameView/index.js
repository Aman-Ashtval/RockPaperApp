import {GameViewBg, CustomButton, ButtonImg} from './styledComponent'

const GameView = props => {
  const {choicesList} = props

  return (
    <GameViewBg>
      {choicesList.map(each => (
        <CustomButton type="button">
          <ButtonImg src={each.imageUrl} alt={each.id} />
        </CustomButton>
      ))}
    </GameViewBg>
  )
}

export default GameView
