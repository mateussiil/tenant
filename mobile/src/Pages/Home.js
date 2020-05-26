import React, { useState } from 'react';
import { StyleSheet, View, TextInput, ListView} from 'react-native';

import api from '../service/api';

import filterHouse from '../utils/filter/filterHouse';

export default function Home() {
    const [city, setCity] = useState("")

    return (
      <View style={styles.container}>
          <TextInput style={styles.input} placeholder="Cidade" onChangeText={text => setCity(text)} value={city}/>
          <TextInput style={styles.input} placeholder="Rua" onChangeText={text => setCity(text)} value={city}/>
          <TextInput style={styles.input} placeholder="Cidade" onChangeText={text => setCity(text)} value={city}/>
          <TextInput style={styles.input} placeholder="Cidade" onChangeText={text => setCity(text)} value={city}/>
      </View>
    );
}
