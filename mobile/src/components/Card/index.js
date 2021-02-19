import React, { useState, useEffect } from 'react';
import api from '../../services/api'
import { FlatList, Text } from 'react-native';
import { List, IconButton } from 'react-native-paper';
import { StyledText } from './styles';

const Card = (laneId) => {

  const [expanded, setExpanded] = useState(false);

  const handlePress = () => setExpanded(!expanded);

  const [orders, setOrders] = useState()

  useEffect(() => {
    const getOrders = async () => {
      const { data: orders } = await api.get('/')
      setOrders(orders)
    }
    getOrders()
  }, [])

  return (
    <FlatList
      data={orders}
      renderItem={({ item }) => {
        if (item.lane === laneId.laneId) {
          return <List.Accordion titleStyle={{ fontSize: 18 }}
          title={item.title}
            expanded={expanded}
            onPress={handlePress}>
            {
              item.description ? <>
                <StyledText>Descrição:</StyledText>
                <List.Item titleStyle={{ fontSize: 18 }}
                title={item.description} />
              </>
                :
                <></>
            }
            {
              item.contact ? <>
                <StyledText>Contato:</StyledText>
                <List.Item titleStyle={{ fontSize: 18 }}
                title={item.contact} />
              </>
                :
                <></>
            }
            <StyledText>Data:</StyledText>
            <List.Item titleStyle={{ fontSize: 18 }}
            title={item.date} />
            <IconButton icon="playlist-edit"
            size={30}
            />
            <IconButton icon="delete" 
            size={30}
            style={{ position: 'absolute', left: '15%', top: '80%' }}/>
          </List.Accordion>
        }
      }
      }
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

export default Card;