import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;

export const Container = styled.View`
  background-color: white;
  align-items: center;
`

export const StyledText = styled.Text`
  font-size: 25px;
  margin-left: 10px;
  font-weight: bold;
  color: #404040;
`

export const StyledView = styled.View`
  margin: 0;
  border-color: #202020;
  border-top-width: 1px;
  width: ${windowWidth}px;

`