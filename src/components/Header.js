// @app
import React, { useState } from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';

import { RFPercentage } from 'react-native-responsive-fontsize';
import {
    Text,
    View
} from 'react-native';

import Colors from '../styles/Colors';


import { styles } from './styles';
import Button from './Button';

const Header = ({ title, goBack, navigation,okCallBack, callBack, edit, plus }) => {
    const [isEdit, setisEdit] = useState(true)
    return (
        <View style={styles.HeaderContainer(isEdit)}>
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

            <Text style={styles.title(isEdit)}>{title}</Text>
            {edit &&
                <View style={{ flexDirection: 'row' }}>
                    <Button
                        callBack={() => {
                            okCallBack(!isEdit)
                            setisEdit(!isEdit)
                        }}
                        titleStyle={{ marginHorizontal: isEdit ? RFPercentage(-1) : RFPercentage(2) }}
                        title={<Text style={{ color: Colors.tabActive }}>{isEdit ? `Edit` : `Done`}</Text>} />
                    {!isEdit &&
                        <Button
                            callBack={() => {
                                callBack(!isEdit)
                                setisEdit(!isEdit)
                            }}
                            titleStyle={{ color: Colors.red }}
                            title={`Delete`} />
                    }
                </View>
            }
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
