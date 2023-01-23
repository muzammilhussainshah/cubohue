import React, { } from 'react';
import { Image, Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Button from '../../../components/Button';
import Colors from '../../../styles/Colors';

import { CastAndCrewData, TrailerData } from "../DummyData"
import { styles } from '../styles';

export const CastAndCrew = () => {
    return (
        CastAndCrewData.map((item, index) => {
            return (
                <View key={index.toString()} style={{ flexDirection: 'row', marginVertical: RFPercentage(.5) }}>
                    <Image source={{ uri: item.url }} resizeMode={'stretch'} style={{ flex: 3, height: RFPercentage(10), borderRadius: RFPercentage(2) }} />
                    <View style={{ flex: 7, justifyContent: 'center' }}>
                        <Text style={[styles.title(Colors.white, RFPercentage(1.5)), { marginHorizontal: RFPercentage(2) }]}>{item?.name}</Text>
                        <Text style={[styles.title(Colors.tabInactive, RFPercentage(1.5)), { marginHorizontal: RFPercentage(2) }]}>{item?.name2}</Text>
                    </View>
                </View>

            )
        })

    )
}
export const Trailer = () => {
    return (
        TrailerData.map((item, index) => {
            return (
                <View key={index.toString()} style={{ flexDirection: 'row', marginVertical: RFPercentage(.5) }}>
                    <Image
                        source={{ uri: item.url }}
                        resizeMode={'stretch'}
                        style={{ flex: 3.5, height: RFPercentage(10), borderRadius: RFPercentage(2) }} />
                    <View style={{ flex: 6.5, }}>
                        <Text style={[styles.title(Colors.white, RFPercentage(1.5)), { marginHorizontal: RFPercentage(2) }]}>{item?.title}</Text>
                    </View>
                </View>

            )
        })
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