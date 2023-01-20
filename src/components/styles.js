import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../styles/Colors';
export const styles = StyleSheet.create({
    title: { color: Colors.white, fontSize: RFPercentage(2), fontWeight: '700', textTransform: 'capitalize', flex: 1, textAlign: "center" },
    HeaderContainer: { height: RFPercentage(12), backgroundColor: Colors.tabBg, width: '100%', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', padding: RFPercentage(2) }
});