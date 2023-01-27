// @app
import React, {
  useEffect,
  useState
} from 'react';
import {
  FlatList,
  View,
  AsyncStorage
} from 'react-native';


import Button from '../../components/Button';
import Header from '../../components/Header';
import { styles } from './styles';
import {
  Movies,
  selectListHanlde,
  _retrieveData
} from './Components/Component';

const Countdown = ({ navigation }) => {
  const [isEdit, setisEdit] = useState(true)
  const [countDown, setcountDown] = useState([])
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      _retrieveData(setcountDown)
    });
    return unsubscribe;
  }, [navigation]);

  const onDeleteHandle = async (state) => {
    setisEdit(state)
    if (state == true) {
      let arr1 = countDown;
      let arr2 = movieList;
      const difference = arr1.filter(({ id: id1 }) => !arr2.some(({ id: id2 }) => id2 === id1));
      let moviesArr = JSON.stringify(difference)
      setcountDown(difference)
      setMovieList([])
      await AsyncStorage.setItem('Movies', moviesArr,);
    }
  }
  return (
    <View style={styles.container}>
      <Header
        title={`Countdown`}
        edit
        okCallBack={async (state) => {
          setisEdit(state)
        }}
        callBack={onDeleteHandle}
      />
      <FlatList
        data={countDown}
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
        renderItem={({ item }) => {
          return (
            <Movies
              callBack={(item) => selectListHanlde(item, movieList, setMovieList, isEdit)}
              isEdit={isEdit} 
              item={item} />)
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
export default Countdown;
