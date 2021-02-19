import React, { useState, useEffect } from 'react';
import api from '../../services/api'
import { FlatList, Text } from 'react-native';
import { List } from 'react-native-paper';
// import { Container } from './styles';

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
          return <List.Accordion title={item.title}
          expanded={expanded}
          onPress={handlePress}>
            <List.Item title={item.description} />
            <List.Item title={item.contact} />
            <List.Item title={item.date} />
          </List.Accordion>
        }
      }
      }
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

export default Card;