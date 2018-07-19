/**
 * Created by 李卓原 on 2018/7/6.
 * email: zhuoyuan93@gmail.com
 *
 */
import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import * as ScreenUtil from "../utils/ScreenUtil";

export default class TaskDetailsTextView extends React.Component {

    render() {
        let {key1, key2, value1 = '', value2 = ''} = this.props;
        if (!value2 && !value1) {
            return null;
        }
        return (
            <View style={{flexDirection: 'row', marginBottom: ScreenUtil.scaleSize(10)}}>
                <View style={{flex: 1}}>
                    <Text style={styles.normalText}>{`${key1}: ${value1}`}</Text>
                </View>
                {
                    key2 ?
                        <View style={{flex: 1}}>
                            <Text style={styles.normalText}>{`${key2}: ${value2}`}</Text>
                        </View>
                        :
                        null
                }

            </View>
        )
    }
}

const styles = StyleSheet.create({

    normalText: {
        color: '#101010',
        fontSize: ScreenUtil.setSpText(14),
        lineHeight: ScreenUtil.scaleSize(20),
    },
});