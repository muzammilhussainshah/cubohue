import React, {
    useEffect,
    useState
} from 'react';
import { AsyncStorage, Image, TouchableOpacity } from "react-native";
import { RFPercentage } from 'react-native-responsive-fontsize';

import AntDesign from 'react-native-vector-icons/AntDesign'
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../../components/Button';
import { getMovieDetails, getTvShowsDetails } from '../../../store/action/action';
import ActionTypes from '../../../store/constant/constant';
import Colors from '../../../styles/Colors';
import { styles } from '../styles';

export const SearchForShow = (e, trandingTVShows) => {
    let keywords = e.split(' ');
    if (keywords[0] === '') {
        return trandingTVShows
        // setShows(trandingTVShows)
    }
    if (keywords[0] !== '') {
        let searchPattern = new RegExp(
            keywords.map((term) => `(?=.*${term})`).join(''),
            'i'
        );
        let filterChat = [];
        for (let index = 0; index < trandingTVShows?.length; index++) {
            filterChat = trandingTVShows?.filter((data) => data.name.match(searchPattern));
        }
        return filterChat
        // setShows(filterChat);
    }
};

export const SearchForMovie = (e, trandingMovies) => {
    let keywords = e.split(' ');
    if (keywords[0] === '') {
        return trandingMovies
    }
    if (keywords[0] !== '') {
        let searchPattern = new RegExp(
            keywords.map((term) => `(?=.*${term})`).join(''),
            'i'
        );
        let filterChat = [];
        for (let index = 0; index < trandingMovies?.length; index++) {
            filterChat = trandingMovies?.filter((data) => data.title.match(searchPattern));
        }
        return filterChat
    }
};


export const _storeData = async (data, countDown, setcountDown) => {
    try {
        let copyArr = JSON.parse(JSON.stringify(countDown));
        let isAlreadyInList = copyArr.findIndex((key) => key.id == data.id)
        if (isAlreadyInList !== -1) copyArr.splice(isAlreadyInList, 1)
        else copyArr.push(data)
        setcountDown(copyArr)
        let moviesArr = JSON.stringify(copyArr)
        await AsyncStorage.setItem('Movies', moviesArr,);
        console.log('data added successFully')
    } catch (error) {
        console.log(error, 'data added successFully')
        // Error saving data
    }
};
export const _storeDataTVShows = async (data, tvShows, settvShows) => {
    try {
        let copyArr = JSON.parse(JSON.stringify(tvShows));
        let isAlreadyInList = copyArr.findIndex((key) => key.id == data.id)
        if (isAlreadyInList !== -1) copyArr.splice(isAlreadyInList, 1)
        else copyArr.push(data)
        settvShows(copyArr)
        let tvShowsArr = JSON.stringify(copyArr)
        await AsyncStorage.setItem('TVShows', tvShowsArr,);
        console.log(copyArr, 'data added successFully')
    } catch (error) {
        console.log(error, 'data added successFully')
        // Error saving data
    }
};

export const _retrieveData = async (setcountDown, settvShows) => {
    try {
        const value = await AsyncStorage.getItem('Movies');
        const tvShows = await AsyncStorage.getItem('TVShows');
        if (value !== null) setcountDown(JSON.parse(value))
        if (tvShows !== null) settvShows(JSON.parse(tvShows))
    } catch (error) {
        // Error retrieving data
    }
};

export const LISTITEM = ({ item, countDown, activeTab, setcountDown, settvShows, tvShows, navigation }) => {
    let available;
    if (activeTab == 'Movies') available = countDown?.findIndex((key) => key.id == item.id)
    else available = tvShows?.findIndex((key) => key.id == item.id)
    const dispatch = useDispatch()
    return (
        <TouchableOpacity
            onPress={async () => {
                await dispatch({ type: ActionTypes.VIDEODETAIL, payload: [] });
                navigation.navigate('VideoScreen', { id: item?.id, activeTab: activeTab })
            }}
            activeOpacity={.8}
            style={styles.thumbnailContainer}>
            <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500/` + item.poster_path }}
                resizeMode={'stretch'}
                style={styles.thumbnailStyle}
            />
            <Button
                customStyle={styles.addIconContainer}
                callBack={async () => {
                    if (activeTab == 'Movies') _storeData(item, countDown, setcountDown)
                    else {
                        let result = await dispatch(getTvShowsDetails(item?.id))
                        _storeDataTVShows(result, tvShows, settvShows)
                    }
                }}
                title={
                    available !== -1 ?
                        <AntDesign
                            name={`checkcircle`}
                            color={Colors.skyBlue}
                            size={RFPercentage(2.8)} />
                        :
                        <AntDesign
                            name={`plus`}
                            size={RFPercentage(2)}
                            color={Colors.white} />
                }
            />
        </TouchableOpacity>
    )
}