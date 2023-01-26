// @app
import React, {
  useState
} from 'react';
import {
  FlatList,
  View
} from 'react-native';

import { RFPercentage } from 'react-native-responsive-fontsize';

import Button from '../../components/Button';
import Header from '../../components/Header';
import { Movies } from './Components/Component';
import { styles } from './styles';

const Countdown = ({ navigation }) => {
  const [isEdit, setisEdit] = useState(true)
  return (
    <View style={styles.container}>
      <Header
        title={`Countdown`}
        edit
        callBack={(state) => setisEdit(state)}
      />
      <FlatList
        data={[1,1,1,1]}
        contentContainerStyle={styles.movieListContainer}
        ListHeaderComponent={() => {
          return (
            <Button
              customStyle={styles.buttonStyle}
              title={`Movies`}
              titleStyle={styles.titleStyle}
              callBack={() => { }}
            />)
        }}
        renderItem={({ }) => (<Movies isEdit={isEdit} />)}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
export default Countdown;
