// @app
import React, {
  useEffect,
  useState
} from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import Button from '../../components/Button';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import { styles } from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../styles/Colors';

const Find = ({ }) => {
  const [activeTab, setActiveTab] = useState('Movies')
  const DUMMYTHUMBNAIL = [
    'https://people.com/thmb/R5ApUBbhBJOnjkQ66Zi84LcoE4E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(1139x398:1141x400)/avatar-way-of-the-water-112222-1-c85447dc6bdf411b864fac62a7102993.jpg',
    `https://cdn.cnn.com/cnnnext/dam/assets/221219142122-01-puss-in-boots-the-last-wish-film-super-tease.jpg`,
    `https://i.ytimg.com/vi/KpsQ1bCl43s/maxresdefault.jpg`,
    `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZZPJlZgvMfGoO5S9u51ehcXhmwXBAmOBsNJGOBEU4A4A_-vTdZk1Mo_oDdrDnQguGorI&usqp=CAU`,
    'https://people.com/thmb/R5ApUBbhBJOnjkQ66Zi84LcoE4E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(1139x398:1141x400)/avatar-way-of-the-water-112222-1-c85447dc6bdf411b864fac62a7102993.jpg',
    `https://cdn.cnn.com/cnnnext/dam/assets/221219142122-01-puss-in-boots-the-last-wish-film-super-tease.jpg`,
    `https://i.ytimg.com/vi/KpsQ1bCl43s/maxresdefault.jpg`,
    `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZZPJlZgvMfGoO5S9u51ehcXhmwXBAmOBsNJGOBEU4A4A_-vTdZk1Mo_oDdrDnQguGorI&usqp=CAU`,
  ]
  return (
    <View style={styles.container}>
      <Header title={`Find`} />
      <View style={styles.tabContainer}>

        <Button
          customStyle={styles.tabButtonStyle('Movies', activeTab)}
          title={`Movies`}
          titleStyle={styles.tabTitleStyle('Movies')}
          callBack={() => { setActiveTab('Movies') }}
        />
        <Button
          customStyle={styles.tabButtonStyle('TV Shows', activeTab)}
          title={`TV Shows`}
          titleStyle={styles.tabTitleStyle('TV Shows')}
          callBack={() => { setActiveTab('TV Shows') }}
        />
      </View>
      <SearchBar
        icon={<Fontisto name="search" color={Colors.tabInactive} size={RFPercentage(2)} />}
        containerStyle={styles.SearchBarStyle}
        placeholderTextColor={Colors.tabInactive}
        placeHolder={`Movies & TV Shows`}
        textStyle={styles.textStyle}
      />
      <Text style={styles.listTitle}>Coming Soon</Text>
      <FlatList
        data={DUMMYTHUMBNAIL}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-evenly', alignItems: 'center' }}
        renderItem={({ item }) => {
          return (
            <View style={styles.thumbnailContainer}>

              <Image
                source={{ uri: item }}
                resizeMode={'stretch'}
                style={styles.thumbnailStyle}
              />
              <Button
                customStyle={styles.addIconContainer}
                title={<AntDesign name={`plus`} size={RFPercentage(2)} color={Colors.white} />}
              />
            </View>
          )
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
export default Find;
