// @app
import React, {
    useEffect,
    useState
} from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

const Button = ({ navigation, customStyle, titleStyle, title, callBack }) => {
    return (
        <TouchableOpacity
            style={customStyle}
            activeOpacity={0.8}
            onPress={callBack}
        >
            <Text style={titleStyle}>{title}</Text>
        </TouchableOpacity>
    );
};
export default Button;
