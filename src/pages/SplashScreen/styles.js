import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../styles/Colors';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.tabBg,
        alignItems: 'center'
    },
    loading: {
        fontSize: RFPercentage(1.5),
        color: Colors.white,
        position: "absolute",
        zIndex: 2,
        bottom: RFPercentage(5)
    }
});