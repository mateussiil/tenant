import React from 'react';
import { View, Text } from 'react-native';

export default function House({ route }){
    const { house } = route.params;
    return (
        <View>
            <Text>Casa {house.id} </Text>
        </View>
    )
}