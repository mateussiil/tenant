import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Feather, AntDesign } from '@expo/vector-icons'

import styles from './styles';

import filterImage from '../../utils/filter/filterImage';

export default function CardHouse({data:house, arquivos}){
    const navigation = useNavigation();

    function handleNavigationToDetail(id){
        
    }

    return (
        <View style={styles.container}>
            <View style={styles.imgView}>
                <Image style={styles.img} source={{uri: filterImage(arquivos, house.id)}}/>
            </View>
            <View style={styles.info}>
                <Text style={styles.street}>{house.street}</Text>
                <View style={styles.end}>
                    <Text style={styles.city}>{house.city}</Text>
                    <Text style={styles.city}>-</Text>
                    <Text style={styles.city}>{house.uf}</Text>
                </View>
                <View>
                    <View style={styles.line}>
                        <AntDesign name="home" size={20} color="gray" />
                        <Text style={styles.description}>Disponibilidade</Text>
                    </View>
                    <Text style={styles.value}>{house.qtdQuartos} quartinhos</Text>
                </View>
                <View>
                    <View style={styles.line}>
                        <Feather name="dollar-sign" size={20} color="gray" />
                        <Text style={styles.description}>Valor</Text>
                    </View>
                    <Text style={styles.value}>R$ {house.price}</Text>
                </View>
                <TouchableOpacity style={styles.detailsButton} onPress={() => navigation.navigate('Details', {
                        house:house
                    })} >
                    <Text style={styles.detailsText}>Veja mais detalhes</Text>
                    <Feather name="arrow-right" size={16} color="#FF6262"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}
