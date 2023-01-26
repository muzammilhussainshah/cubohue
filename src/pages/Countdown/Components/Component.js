import React, {
    useEffect,
    useState
} from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View
} from "react-native"

import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import * as Progress from 'react-native-progress';

import Colors from '../../../styles/Colors';
import Button from '../../../components/Button';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { styles } from '../styles';

export const Movies = ({ isEdit, TVTracker, callBack, seasons }) => {
    const [isSelected, setIsSelected] = useState(false)

    return (
        <TouchableOpacity
            onPress={() => callBack ? callBack() : !isEdit && setIsSelected(!isSelected)}
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
                    source={{ uri: `https://static.wikia.nocookie.net/jamescameronsavatar/images/e/e5/Avatar_TWoW_Neytiri_Textless_Poster.jpg/revision/latest?cb=20221125232909` }}
                    style={styles.poster}
                />
            </View>
            <View style={styles.movieBody}>
                {TVTracker ?
                    <>
                        <View style={styles.TVTrackerListBodyContainer}>
                            <Text style={[styles.titleStyle, { marginLeft: RFPercentage(.5) }]}>{`Bhagya Lakshmi`}</Text>
                            <View style={[styles.TVTrackerListBarContainer, {}]}>
                                <Progress.Bar
                                    borderWidth={0}
                                    unfilledColor={Colors.tabInactive}
                                    height={RFPercentage(1)}
                                    progress={.9}
                                    color={`purple`}
                                    width={RFPercentage(20)} />

                                <Text style={[styles.title, { marginLeft: RFPercentage(.5) }]}>{`1/1`}</Text>
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
                        <Text style={[styles.titleStyle, { marginLeft: RFPercentage(.5) }]}>{`Avatar: The Way Of Water`}</Text>
                        <Text style={[styles.title, { marginLeft: RFPercentage(.5) }]}>{`2022-14-14`}</Text>
                    </>}
            </View>
            <View style={styles.daysContainer(TVTracker)}>
                {!TVTracker &&
                    <Text style={styles.days}>{`-43 days`}</Text>
                }
            </View>
        </TouchableOpacity>
    )
}