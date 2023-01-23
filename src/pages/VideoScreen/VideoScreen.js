// @app
import React, {
  useState
} from 'react';

import { RFPercentage } from 'react-native-responsive-fontsize';
import {
  Image,
  ScrollView,
  Text,
  View
} from 'react-native';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Colors from '../../styles/Colors';
import { styles } from './styles';
import {
  CastAndCrew,
  Discover,
  Trailer
} from './Components/Component';

const VideoScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Cast & Crew')

  return (
    <View style={styles.container}>
      <Header
        goBack
        title={`The Gray Man`}
        plus
        navigation={navigation}
      />
      <ScrollView>

        <Image
          resizeMode='stretch'
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Emmerdale_titles.png' }}
          style={styles.videoContainer} />
        <View style={styles.bodyContainer}>
          <Text style={styles.title(Colors.white, RFPercentage(2))}>{`Emmerdale`}</Text>

          {[`1972-10-16`, `2h 2m PG-13`].map((item) => <Text style={styles.title(Colors.tabInactive, RFPercentage(1.3))}>{item}</Text>)}

          <Text style={styles.title(Colors.white, RFPercentage(1.4), RFPercentage(.1))}>{`The life of saveral families in the yorkshire Dales revole around a farm and the nearby village. With murders, affairs, lies, deceit, loughter and tears, it's all there in the village. `}</Text>
          <View style={styles.tags}>

            {[`Soap`, `Drama`].map((item) => <Button customStyle={styles.tagContainer} titleStyle={styles.tagText} title={item} />)}

          </View>
          <Text style={styles.title(Colors.white, RFPercentage(1.3))}>{`Status: In Production`}</Text>

          <View style={{ flexDirection: 'row', marginVertical: RFPercentage(.5) }}>

            {[`Cast & Crew`, `Trailer`, `Discover`].map((item) => <Button
              customStyle={styles.tabButtonStyle(item, activeTab)}
              title={item}
              titleStyle={styles.tabTitleStyle(item)}
              callBack={() => { setActiveTab(item) }}
            />)}

          </View>

          {activeTab == 'Discover' && <Discover />}
          {activeTab == 'Trailer' && <Trailer />}
          {activeTab == `Cast & Crew` && <CastAndCrew />}

        </View>


      </ScrollView>
    </View>
  );
};
export default VideoScreen;
