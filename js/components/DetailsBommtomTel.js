/**
 * Created by 李卓原 on 2018/7/6.
 * email: zhuoyuan93@gmail.com
 *
 */

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Linking,
    ToastAndroid
} from 'react-native';
import * as ScreenUtil from '../utils/ScreenUtil';
import Contacts from 'react-native-contacts';

export default class DetailsBommtomTel extends React.Component {
    render() {
        let {name, relation_ship, cell_number} = this.props.item;
        if (!cell_number) return null;
        return (
            <View style={styles.container}>
                <View style={styles.rowView}>

                    <Text
                        numberOfLines={2}
                        style={styles.titleStyle}>{`${relation_ship == 'myself' ? relation_ship : name}:${cell_number}`}</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <TouchableOpacity
                            onPress={() => {
                                Linking.openURL(`tel:${cell_number}`)
                            }}>
                            <Image source={require('../img/tel.png')} style={styles.img}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            Linking.openURL(`smsto:${cell_number}`)
                        }}>
                            <Image source={require('../img/message.png')} style={styles.img}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            Contacts.addContact(
                                {
                                    phoneNumbers: [{label: 'Main', number: cell_number}],
                                    givenName: name,
                                },
                                (e) => {
                                    if (e) {
                                        console.log(e)
                                    }
                                    else {
                                        ToastAndroid.show('已保存该联系人', ToastAndroid.SHORT);
                                    }
                                }
                            )
                        }}>
                            <Image source={require('../img/person.png')} style={styles.img}/>
                        </TouchableOpacity>
                    </View>
                </View>

                {relation_ship && <Text style={styles.normalText}>{`Relation:${relation_ship}`}</Text>}

                <View style={{
                    width: ScreenUtil.screenW,
                    height: ScreenUtil.scaleSize(1),
                    marginVertical: ScreenUtil.scaleSize(5),
                    backgroundColor: 'grey'
                }}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        maxWidth: ScreenUtil.screenW,
        paddingHorizontal: ScreenUtil.scaleSize(17)
    },
    titleStyle: {
        color: '#000',
        fontSize: ScreenUtil.setSpText(16),
        lineHeight: ScreenUtil.scaleSize(29),
        maxWidth: ScreenUtil.screenW * 0.6
    },
    normalText: {
        color: 'rgba(0,0,0,0.54)',
        fontSize: ScreenUtil.setSpText(14),
        lineHeight: ScreenUtil.scaleSize(24)
    },
    rowView: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },

    btnText: {
        fontSize: ScreenUtil.setSpText(14),
        lineHeight: ScreenUtil.scaleSize(20),
        color: '#101010',

    },
    img: {
        width: ScreenUtil.scaleSize(24),
        height: ScreenUtil.scaleSize(24),
        marginLeft: ScreenUtil.scaleSize(10)
    }
});