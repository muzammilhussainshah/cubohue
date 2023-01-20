// @app
import React, {
} from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Colors from '../styles/Colors';


import { styles } from './styles';

const Header = ({ title, edit }) => {
    return (
        <View style={styles.HeaderContainer}>
            {/* {leftIcon} */}
            {/* <View /> */}
            <Text style={styles.title}>{title}</Text>
            {/* {rightIcon} */}
            <TouchableOpacity activeOpacity={0.8}>
                <Text style={{ color: Colors.tabActive }}>{edit && `Edit`}</Text>
            </TouchableOpacity>
        </View>
    );
};
export default Header;
