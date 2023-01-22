// @app
import React from 'react';
import {  TextInput,  View, } from 'react-native';

const SearchBar = ({ containerStyle, icon, textStyle, placeholderTextColor, placeHolder }) => {
    return (
        <View style={containerStyle}>
            {icon}
            <TextInput
                placeholderTextColor={placeholderTextColor}
                placeholder={placeHolder}
                style={textStyle} />
        </View>
    );
};
export default SearchBar;
