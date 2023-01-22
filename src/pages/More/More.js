// @app
import React, {
  useState
} from 'react';
import { Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Header from '../../components/Header';
import Colors from '../../styles/Colors';
import { CustomSwitchers } from './Components/Component';
import { styles } from './styles';

const More = ({ }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [weekEnabled, setWeekEnabled] = useState(false);

  return (
    <View style={styles.container}>

      <Header title={`Setting`} />

      <Text style={styles.title(Colors.tabInactive, RFPercentage(1.3))}>{`COUNTDOWN NOTIFICATIONS`}</Text>

      <CustomSwitchers
        title={`Day Before`}
        state={isEnabled}
        setState={() => setIsEnabled} />
      <CustomSwitchers
        title={`Week Before`}
        state={weekEnabled}
        setState={() => setWeekEnabled} />

    </View>

  );
};
export default More;
