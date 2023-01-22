import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../styles/Colors';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black
    },
    title: (color, size) => ({
        color: color,
        // Colors.tabInactive,
        fontWeight: '600',
        fontSize: size,
        // RFPercentage(1.3),
        margin: RFPercentage(1),
        marginVertical: RFPercentage(2)
    }),
    switchContainer: {
        // height: RFPercentage(10),
        backgroundColor: Colors.tabBg,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:"space-between"
    },

});