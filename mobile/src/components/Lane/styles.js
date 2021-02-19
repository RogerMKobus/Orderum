import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;

export const Container = styled.View`
  background-color: white;
  align-items: center;
`

export const StyledText = styled.Text`
  font-size: 22px;
  margin-left: 10px;
  font-weight: bold;
`

export const StyledView = styled.View`
  margin: 15px 0;
  border-top-color: black;
  border-top-width: 1px;
  width: ${windowWidth}px;

`