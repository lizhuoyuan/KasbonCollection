/**
 * Created by 李卓原 on 2018/7/6.
 * email: zhuoyuan93@gmail.com
 *
 */

import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Button,
    ToastAndroid,
} from 'react-native';

import * as ScreenUtil from '../utils/ScreenUtil';
import Fetch from '../net/Fetch';
import Url from "../net/Url";

import CryptoJS from 'crypto-js';

export default class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.textAndInputView}>
                    <Text style={styles.textView}>Email</Text>
                    <TextInput style={styles.input}
                               underlineColorAndroid={"transparent"}
                               onChangeText={(text) => {
                                   this.setState({
                                       email: text
                                   })
                               }}/>
                </View>
                <View style={styles.textAndInputView}>
                    <Text style={styles.textView}>Password</Text>
                    <TextInput style={styles.input}
                               underlineColorAndroid={"transparent"}
                               secureTextEntry={true}
                               onChangeText={(text) => {
                                   this.setState({
                                       password: text
                                   })
                               }}/>
                </View>

                <View style={styles.buttonView}>
                    <Button
                        title='Login'
                        color='#5677FC'
                        onPress={this._login}/>
                </View>
            </View>
        )

    }

    _login = () => {
        let {email, password} = this.state;

        if (ScreenUtil.isEmpty(email) || ScreenUtil.isEmpty(password)) {
            ToastAndroid.show('请输入正确的账号信息', ToastAndroid.LONG);
        }
        else {
            let md5_password = CryptoJS.MD5(password).toString();
            Fetch.post(Url.app_login, {email, password: md5_password},
                result => {
                    if (result.data) {
                        global.uk = result.data.token;
                        this.props.navigation.navigate('RootStack');
                    } else {
                        ToastAndroid.show('请输入正确的账号信息', ToastAndroid.LONG);
                    }
                }, error => {

                });

        }

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    textAndInputView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: ScreenUtil.scaleSize(33),
        width: ScreenUtil.scaleSize(275),
    },
    textView: {
        marginRight: ScreenUtil.scaleSize(14),
        fontSize: ScreenUtil.scaleSize(14),
        color: '#101010',
    },
    input: {
        width: ScreenUtil.scaleSize(200),
        height: ScreenUtil.scaleSize(30),
        padding: 0,
        borderWidth: ScreenUtil.scaleSize(1),
        borderColor: '#BBB',
        fontSize: ScreenUtil.scaleSize(14),
        color: '#888',
        paddingHorizontal: ScreenUtil.scaleSize(5)
    },
    buttonView: {
        width: ScreenUtil.scaleSize(94),
        height: ScreenUtil.scaleSize(36)
    }
});