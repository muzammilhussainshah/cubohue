import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { styles } from '../styles';
import Colors from '../../../styles/Colors';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const List = () => {
    const [isSelected, setIsSelected] = useState(false)
    return (
        <TouchableOpacity
            onPress={() => {
                setIsSelected(!isSelected)
            }}
            activeOpacity={0.8}
            style={styles.listContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.selectAll}>{`Episode 1`}</Text>
                <Text style={styles.date}>{`2022-08-23`}</Text>
            </View>
            <View style={styles.checkContainer}>
                {isSelected ?
                    <AntDesign
                        name={`checkcircle`}
                        color={Colors.skyBlue}
                        size={RFPercentage(2)} />
                    :
                    <Entypo
                        name={`circle`}
                        color={Colors.white}
                        size={RFPercentage(2)} />
                }

            </View>
        </TouchableOpacity>
    )
}