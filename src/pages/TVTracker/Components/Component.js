// @app
import React from 'react';
import { AsyncStorage } from 'react-native';
export const _retrieveData = async (setTvShows) => {
    try {
        const moviesList = await AsyncStorage.getItem('TVShows');
        if (moviesList !== null) setTvShows(JSON.parse(moviesList))
    } catch (error) {
        // Error retrieving data
    }
};
