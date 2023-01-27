import React, { } from 'react';
import {
    Image,
    Linking,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import { RFPercentage } from 'react-native-responsive-fontsize';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import * as Progress from 'react-native-progress';

import Button from '../../../components/Button';
import Colors from '../../../styles/Colors';

import { styles } from '../styles';

export const CastAndCrew = ({ cast }) => {
    return (
        cast?.length ? cast.map((item, index) => {
            return (
                <View key={index.toString()} style={{ flexDirection: 'row', marginVertical: RFPercentage(.5) }}>
                    <Image source={{ uri: `https://image.tmdb.org/t/p/w500/` + item.profile_path }} resizeMode={'stretch'} style={{ flex: 3, height: RFPercentage(10), borderRadius: RFPercentage(2) }} />
                    <View style={{ flex: 7, justifyContent: 'center' }}>
                        <Text style={[styles.title(Colors.white, RFPercentage(1.5)), { marginHorizontal: RFPercentage(2) }]}>{item?.name}</Text>
                        <Text style={[styles.title(Colors.tabInactive, RFPercentage(1.5)), { marginHorizontal: RFPercentage(2) }]}>{item?.character}</Text>
                    </View>
                </View>

            )
        })
            : <></>
    )
}
export const Trailer = ({ trailer }) => {
    return (
        trailer?.length ? trailer?.map((item, index) => {
            return (
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => { Linking.openURL('https://www.youtube.com/watch?v=' + item.key) }}
                    key={index.toString()} style={{ flexDirection: 'row', alignItems: "center", marginVertical: RFPercentage(.5) }}>
                    <Image
                        source={{ uri: `https://capeandcastle.com/wp-content/uploads/2020/06/Dummy-1.jpg` }}
                        resizeMode={'cover'}
                        style={{ flex: 3.5, height: RFPercentage(10), borderRadius: RFPercentage(2) }} />
                    <View style={{ flex: 6.5, }}>
                        <Text style={[styles.title(Colors.white, RFPercentage(1.5)), { marginHorizontal: RFPercentage(2) }]}>{item?.name}</Text>
                    </View>
                </TouchableOpacity >

            )
        }) :
            <></>
    )
}


export const Discover = () => {
    return (
        <>
            <Text style={styles.title(Colors.tabInactive, RFPercentage(1.3), 0, 'center')}>{`Production`}</Text>
            <View style={styles.tags}>
                <Button
                    customStyle={styles.tagContainer}
                    titleStyle={styles.tagText}
                    title={`aniventure`} />
                <Button
                    customStyle={styles.tagContainer}
                    titleStyle={styles.tagText}
                    title={`Align`} />
            </View>
            <Text style={styles.title(Colors.tabInactive, RFPercentage(1.3), 0, 'center')}>{`Keywords`}</Text>
            <View style={styles.tags}>
                <Button
                    customStyle={[styles.tagContainer,]}
                    titleStyle={styles.tagText}
                    title={`cat`} />
                <Button
                    customStyle={styles.tagContainer}
                    titleStyle={styles.tagText}
                    title={`dog`} />
            </View>
        </>
    )
}
export const Season = ({ item, callBack }) => {
    return (
        <>
            <TouchableOpacity
                activeOpacity={.9}
                onPress={() => callBack()}
                style={styles.seasonListContainer}>
                <Entypo
                    name={`circle`}
                    color={Colors.white}
                    size={RFPercentage(2)} />
                <Text style={styles.title(Colors.white, RFPercentage(1.5),)}>{item.name}</Text>
                <Progress.Bar
                    borderWidth={0}
                    unfilledColor={Colors.tabInactive}
                    height={RFPercentage(1)}
                    progress={.3}
                    color={`purple`}
                    width={RFPercentage(22)} />
                <Text style={styles.title(Colors.white, RFPercentage(1.5),)}>{`746/ ` + item.episode_count}</Text>
                <AntDesign name="right" size={RFPercentage(1.5)} color={Colors.white} />
            </TouchableOpacity>
        </>
    )
}