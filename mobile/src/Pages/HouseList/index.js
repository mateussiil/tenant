import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';

import styles from './styles';

import CardHouse from '../../Components/CardHouse';

import api from '../../service/api';

export default function HousesList({ navigation }) {
    const [houses, setHouses] = useState([]);
    const [arquivos, setArquivos] = useState([]);

    useEffect(()=>{
      async function loadHouse(){
        const response = await api.get('/imoveis')
        setHouses([...response.data.reverse()]);
      }
      loadHouse()
    },[])

    useEffect(()=>{
      async function loadImage(){
        const response = await api.get('/arquivos')
        setArquivos(response.data)
      }
      loadImage()
    },[])


    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={houses}
          keyExtractor={house => String(house.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({item: house})=>(
            <CardHouse data={house} arquivos={arquivos}/>
          )}
          >
        </FlatList>
      </View>
    );
}