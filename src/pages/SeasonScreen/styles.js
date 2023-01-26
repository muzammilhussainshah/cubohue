import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../styles/Colors';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.tabBg,
        // alignItems: 'center',
        paddingVertical: RFPercentage(5),
        paddingHorizontal: RFPercentage(2)
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        // backgroundColor: 'red',
        alignItems: "center",
        paddingVertical: RFPercentage(1)
    },
    selectAll: {
        color: Colors.white,
        fontSize: RFPercentage(1.7),
        fontWeight: '600'
    },
    date: {
        color: Colors.white,
        fontSize: RFPercentage(1.3),
        fontWeight: '600'
    },
    listContainer: {
        flexDirection: 'row',
        borderBottomWidth: .4,
        height:RFPercentage(7),
        borderBottomColor: Colors.tabInactive,
    },
    titleContainer:{
        flex:8.5,
        justifyContent:"center",
        paddingHorizontal:RFPercentage(1)
        // backgroundColor:'red'
    },
    checkContainer:{
        flex:1.5,
        justifyContent:"center",
        alignItems:'flex-end',
        paddingHorizontal:RFPercentage(1)

        // backgroundColor:'blue'
    }
});