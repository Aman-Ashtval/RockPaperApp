import styled from 'styled-components'

export const GamePlayBg = styled.div`
  min-height: 100vh;
  padding: 50px 100px;
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PopUpBg = styled.div`
  align-self: stretch;
  border: 1px solid white;
  padding: 16px;
  margin-top: 5px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const TriggerButton = styled.button`
  background-color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 8px 15px;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: #223a5f;
`

export const PopupMsgContainer = styled(PopUpBg)`
  height: 50vh;
`
