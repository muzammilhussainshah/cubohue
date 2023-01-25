import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../styles/Colors';
export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Colors.black,
    },
    videoContainer: {
        height: RFPercentage(20),
    },
    title: (color, size, latterSpacing, textAlign) => ({
        color: color,
        fontSize: size,
        fontWeight: '600',
        marginVertical: RFPercentage(.5),
        letterSpacing: latterSpacing,
        textAlign: textAlign
    }),
    bodyContainer: {
        padding: RFPercentage(1.5),
    },
    tags: {
        flexDirection: 'row',
        alignItems: "center",
        flexWrap: 'wrap'
    },
    tagContainer: {
        backgroundColor: Colors.tabInactive,
        paddingHorizontal: RFPercentage(1),
        paddingVertical: RFPercentage(.5),
        borderRadius: RFPercentage(1.5),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: RFPercentage(.5),
        marginVertical: RFPercentage(.8)
    },
    tagText: {
        color: Colors.white,
        fontSize: RFPercentage(1.4)
    },


    tabButtonStyle: (side, activeTab) => ({
        height: RFPercentage(3.5),
        flex: 1,
        backgroundColor: activeTab == side ? Colors.tabInactive : Colors.tabBg,
        borderTopLeftRadius: side == 'Cast & Crew' && RFPercentage(1),
        borderBottomLeftRadius: side == 'Cast & Crew' && RFPercentage(1),
        borderTopRightRadius: side == 'Discover' && RFPercentage(1),
        borderBottomRightRadius: side == 'Discover' && RFPercentage(1),
        justifyContent: 'center',
        alignItems: 'center',

    }),
    tabTitleStyle: () => ({
        color: Colors.white,
        fontWeight: '600',
        fontSize: RFPercentage(1.7)

    }),

});