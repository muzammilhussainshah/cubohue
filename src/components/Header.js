// @app
import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import { RFPercentage } from 'react-native-responsive-fontsize';
import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import Colors from '../styles/Colors';


import { styles } from './styles';
import Button from './Button';

const Header = ({ title, goBack, navigation, edit, plus }) => {
    return (
        <View style={styles.HeaderContainer}>
            {goBack &&
                <Button
                    callBack={() => navigation.pop()}
                    title={
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <AntDesign
                                name={`left`}
                                size={RFPercentage(2)}
                                color={Colors.tabActive} />

                            <Text
                                style={{ color: Colors.tabActive }}>{`Back`}
                            </Text>
                        </View>
                    }
                />
            }

            <Text style={styles.title}>{title}</Text>

            <Button title={<Text style={{ color: Colors.tabActive }}>{edit && `Edit`}</Text>} />

            {plus &&
                <Button
                    title={<AntDesign
                        name={`plus`}
                        size={RFPercentage(2.5)}
                        color={Colors.tabActive} />
                    }
                />
            }
        </View>
    );
};
export default Header;
