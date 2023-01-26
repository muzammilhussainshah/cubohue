import React, {
    useEffect,
    useState
} from 'react';
import { Image, Text, TouchableOpacity, View } from "react-native"

import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../../styles/Colors';
import { styles } from '../styles';
import Button from '../../../components/Button';

export const Movies = ({ isEdit, TVTracker }) => {
    const [isSelected, setIsSelected] = useState(false)
    return (
        <TouchableOpacity
            onPress={() => !isEdit && setIsSelected(!isSelected)}
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
                            <View style={styles.TVTrackerListBarContainer}>
                                <View style={styles.TVTrackerListBar}></View>
                                <Text style={[styles.title, { marginLeft: RFPercentage(.5) }]}>{`1/1`}</Text>
                            </View>
                        </View>
                        <View style={styles.episodeInfoContainer}>

                            <Button
                                customStyle={styles.episodeInfo}
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