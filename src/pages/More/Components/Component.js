
import React, {
    useEffect,
    useState
} from 'react';
import { Switch, Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../../styles/Colors';
import { styles } from '../styles';
export const CustomSwitchers = ({ title, state, setState }) => {
    const toggleSwitch = (state) => state(previousState => !previousState);

    return (
        <View style={styles.switchContainer}>
            <Text style={styles.title(Colors.white, RFPercentage(1.4))}>{title}</Text>
            <Switch
                trackColor={{ false: 'red', true: Colors.tabActive }}
                thumbColor={Colors.white}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch(setState)}
                style={{ transform: [{ scaleX: .6 }, { scaleY: .6 }] }}
                value={state}
            />
        </View>
    )
}