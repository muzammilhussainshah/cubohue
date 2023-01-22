import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../styles/Colors';
export const styles = StyleSheet.create({

    container: { flex: 1, backgroundColor: Colors.black, },
    tabContainer: { flexDirection: 'row', padding: RFPercentage(1), },
    tabButtonStyle: (side, activeTab) => ({
        height: RFPercentage(5),
        // width: '50%',
        flex: 1,
        backgroundColor: activeTab == side ? Colors.tabInactive : Colors.tabBg,


        borderTopLeftRadius: side == 'Movies' && RFPercentage(1),
        borderBottomLeftRadius: side == 'Movies' && RFPercentage(1),
        borderTopRightRadius: side == 'TV Shows' && RFPercentage(1),
        borderBottomRightRadius: side == 'TV Shows' && RFPercentage(1),
        justifyContent: 'center',
        alignItems: 'center',

    }),
    tabTitleStyle: () => ({
        color: Colors.white,
        fontWeight: '600',
        fontSize: RFPercentage(1.7)

    }),
    SearchBarStyle: {
        height: RFPercentage(4),
        borderRadius: RFPercentage(1),
        backgroundColor: Colors.tabBg,
        marginHorizontal: RFPercentage(1),
        paddingHorizontal: RFPercentage(1),
        flexDirection: 'row',
        alignItems: "center",
    },
    textStyle: {
        color: Colors.tabInactive,
        flex: 1,
        padding: 0,
        height: '100%',
        marginHorizontal:RFPercentage(1)
    }
});