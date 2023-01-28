import React, {
    useState
} from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
    AsyncStorage
} from "react-native"

import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import * as Progress from 'react-native-progress';

import Colors from '../../../styles/Colors';
import Button from '../../../components/Button';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { styles } from '../styles';


export const selectListHanlde = (item, movieList, setMovieList, isEdit) => {
    if (!isEdit) {
        let movieListCopy = JSON.parse(JSON.stringify(movieList));
        let isAlreadyHave = movieListCopy.findIndex((key) => key.id == item.id)
        if (isAlreadyHave !== -1) { movieListCopy.splice(isAlreadyHave, 1) }
        else { movieListCopy.push(item) }
        setMovieList(movieListCopy)
    }
}
export const _retrieveData = async (setcountDown) => {
    try {
        const moviesList = await AsyncStorage.getItem('Movies');
        if (moviesList !== null) setcountDown(JSON.parse(moviesList))
    } catch (error) {
        // Error retrieving data
    }
};


export const days_between = (date1, date2) => {

    // The number of milliseconds in one day
    var ONE_DAY = 1000 * 60 * 60 * 24

    // Convert both dates to milliseconds
    var date1_ms = date1.getTime()
    var date2_ms = date2.getTime()

    // Calculate the difference in milliseconds
    var difference_ms = Math.abs(date1_ms - date2_ms)

    // Convert back to days and return
    return Math.round(difference_ms / ONE_DAY)

}
export const Movies = ({ item, isEdit, TVTracker, getFromAsync, callBack, seasons }) => {
    const [isSelected, setIsSelected] = useState(false)
    let result = item?.seasons?.filter((key) => typeof getFromAsync[key.id] !== 'undefined')
    return (
        <TouchableOpacity
            onPress={() => {
                callBack ?
                    <>
                        {!isEdit &&
                            <>
                                {callBack(item)}
                                {setIsSelected(!isSelected)}
                            </>
                        }
                    </>

                    : !isEdit &&

                    setIsSelected(!isSelected)
            }}
            activeOpacity={0.9}
            style={styles.listContainer(TVTracker)}>
            <View style={styles.profileContainer}>
                {!isEdit ? isSelected ?
                    <AntDesign
                        name={`checkcircle`}
                        color={Colors.skyBlue}
                        size={RFPercentage(2)} />
                    :
                    <Entypo
                        name={`circle`}
                        color={Colors.white}
                        size={RFPercentage(2)} /> :
                    <></>
                }
                <Image
                    source={{ uri: `https://image.tmdb.org/t/p/w500/` + item?.poster_path }}
                    style={styles.poster}
                />
            </View>
            <View style={styles.movieBody}>
                {TVTracker ?
                    <>
                        <View style={styles.TVTrackerListBodyContainer}>
                            <Text style={[styles.titleStyle, { marginLeft: RFPercentage(.5), }]}>{item.name.substring(0, 20)}</Text>
                            <View style={[styles.TVTrackerListBarContainer, {}]}>
                                <Progress.Bar
                                    borderWidth={0}
                                    unfilledColor={Colors.tabInactive}
                                    height={RFPercentage(1)}
                                    progress={result?.length / item?.number_of_seasons}
                                    color={`purple`}
                                    width={RFPercentage(20)} />

                                <Text style={[styles.title, { marginLeft: RFPercentage(.5) }]}>{result?.length + ` /` + item?.number_of_seasons}</Text>
                            </View>
                        </View>
                        <View style={styles.episodeInfoContainer}>

                            <Button
                                customStyle={styles.episodeInfo}
                                callBack={() => callBack ? callBack() : null}
                                titleStyle={styles.episodeStyle}
                                title={`Episode info`}
                            />
                            <Text style={[styles.title, { marginLeft: RFPercentage(.5) }]}>{`0 left`}</Text>

                        </View>
                    </>
                    :
                    <>
                        <Text style={[styles.titleStyle, { marginLeft: RFPercentage(.5) }]}>{item?.title}</Text>
                        <Text style={[styles.title, { marginLeft: RFPercentage(.5) }]}>{item?.release_date}</Text>
                    </>}
            </View>
            <View style={styles.daysContainer(TVTracker)}>
                {!TVTracker &&
                    <Text style={styles.days}>{days_between(new Date(item?.release_date), new Date()) + ` days`}</Text>
                }
            </View>
        </TouchableOpacity>
    )
}