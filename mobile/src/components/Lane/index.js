import React, { useState, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import Card from '../Card'
import api from '../../services/api'

import { Container, StyledText, StyledView } from './styles';

const Lane = () => {
    const [lanes, setLanes] = useState()

    useEffect(() => {
        const getLanes = async() =>{
            const { data: lanes } = await api.get('/lane')
            setLanes(lanes)
        }
        getLanes()
    },[])

  return (
    
      <Container>
          <FlatList 
            data={lanes}
            renderItem={({item})=> 
            <StyledView>
                <StyledText>
                    {item.title}
                </StyledText>
                <Card laneId={item._id}/>
            </StyledView>   
            }
            keyExtractor={(item, index) => index.toString()}
          />
      </Container>
  );
}

export default Lane;