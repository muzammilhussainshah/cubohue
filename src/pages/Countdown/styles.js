import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../styles/Colors';
export const styles = StyleSheet.create({
    buttonStyle: {
        height: RFPercentage(5),
        width: '100%',
        backgroundColor: Colors.tabBg,
        justifyContent: "center",
    },
    titleStyle: {
        color: Colors.white,
        marginLeft: RFPercentage(2),
        fontWeight: '700'

    },
    container: {
        flex: 1,
        backgroundColor: Colors.black,
    },
    listContainer: {
        height: RFPercentage(10),
        width: "100%",
        flexDirection: 'row',
        paddingHorizontal: RFPercentage(1),
        backgroundColor: Colors.tabBg
    },
    profileContainer: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center'
    },
    movieBody: {
        flex: 4.5,
        justifyContent: 'center',
        borderBottomWidth: .4,
        borderBottomColor: Colors.tabInactive,
    },
    daysContainer: {
        flex: 3.5,
        justifyContent: "center",
        alignItems: 'center',
        borderBottomWidth: .4,
        borderBottomColor: Colors.tabInactive,
    },
    poster: {
        height: '90%',
        width: '60%',
        borderRadius: RFPercentage(1),
        marginLeft: RFPercentage(.5)
    },
    title: {
        color: Colors.tabInactive,
        fontSize: RFPercentage(1.3),
        fontWeight: '600',
        marginVertical: RFPercentage(.5),
        marginHorizontal: RFPercentage(2)
    },
    days: {
        color: Colors.skyBlue,
        width: '30%',
        fontSize: RFPercentage(1.8)
    },
    movieListContainer: {
        borderRadius: RFPercentage(1),
        marginTop: RFPercentage(2),
        overflow: 'hidden'
    }
});