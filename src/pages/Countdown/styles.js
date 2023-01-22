import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../styles/Colors';
export const styles = StyleSheet.create({
    buttonStyle: {
        height: RFPercentage(5),
        width: '100%',
        borderRadius: RFPercentage(1),
        backgroundColor: Colors.tabBg,
        marginVertical: RFPercentage(2),
        justifyContent: "center",
    },
    titleStyle: {
        color: Colors.white,
        marginLeft: RFPercentage(2)

    },
    container: {
        flex: 1,
        backgroundColor: Colors.black,
    },

});