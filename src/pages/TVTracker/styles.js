import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../styles/Colors';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black,
        justifyContent: 'space-between',
        alignItems: "center"
    },
    noMsgTitle: {
        color: Colors.tabInactive
    },
    buttonStyle: {
        height: RFPercentage(5),
        width: RFPercentage(20),
        borderRadius: RFPercentage(4),
        backgroundColor: Colors.skyBlue,
        marginBottom: RFPercentage(2),
        justifyContent: "center",
        alignItems: 'center'
    },
    titleStyle: {
        color: Colors.white,

    },
    movieListContainer: {
        borderRadius: RFPercentage(1),
        marginTop: RFPercentage(2),
        overflow: 'hidden'
    }
});