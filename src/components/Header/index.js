import {
  HeaderBg,
  HeaderUl,
  HeaderLi,
  ScoreBg,
  ScorePara,
} from './styledComponent'

const Header = props => {
  const {score} = props
  return (
    <HeaderBg>
      <HeaderUl>
        <HeaderLi>ROCK</HeaderLi>
        <HeaderLi>PAPER</HeaderLi>
        <HeaderLi>SCISSORS</HeaderLi>
      </HeaderUl>
      <ScoreBg>
        <ScorePara>Score</ScorePara>
        <ScorePara>0</ScorePara>
      </ScoreBg>
    </HeaderBg>
  )
}

export default Header
