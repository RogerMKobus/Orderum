import React, { useState, useEffect } from 'react';
import api from '../../services/api'
import { FlatList, Text } from 'react-native';
// import { Container } from './styles';

const Card = (laneId) => {

  const [orders, setOrders] = useState()

    useEffect(() => {
        const getOrders = async() =>{
            const { data: orders } = await api.get('/')
            setOrders(orders)
        }
        getOrders()
    },[])

  return(
    <FlatList 
      data={orders}
      renderItem={({item})=> {        
        if(item.lane === laneId.laneId){
          return <Text>{item.title}</Text>
        }
      }
      }
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

export default Card;