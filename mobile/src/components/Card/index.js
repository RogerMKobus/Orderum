import React, { useState, useEffect } from 'react';
import api from '../../services/api'
import { FlatList } from 'react-native';
import { List, IconButton } from 'react-native-paper';
import { StyledText } from './styles';
import { useNavigation } from '@react-navigation/native';

const Card = ({laneId, lanes}) => {

  const navigation = useNavigation();

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
        if (item.lane === laneId) {
          return <List.AccordionGroup>
            <List.Accordion
              id={item._id}
              style={{
                borderBottomColor: '#303030', borderWidth: 1, borderTopWidth: 1
              }
              }
              titleStyle={{ fontSize: 18 }}
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
                onPress={() => {
                  const data = {...item,  ...lanes}
                  navigation.navigate('Edit', data)
                }}
              />
              <IconButton icon="delete"
                size={30}
                style={{ position: 'absolute', left: '15%', bottom: '0%' }} />
            </List.Accordion>
          </List.AccordionGroup>
        }
      }
      }
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

export default Card;