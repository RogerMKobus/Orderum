import React, { useState, useEffect } from 'react';
import { Text, FlatList } from 'react-native';

import api from '../../services/api'

import { Container } from './styles';

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
                <Text>
                    {item.title}
                </Text>
            }
            keyExtractor={(item, index) => index.toString()}
          />
      </Container>
  );
}

export default Lane;