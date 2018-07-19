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
    TouchableOpacity
} from 'react-native';
import * as ScreenUtil from '../utils/ScreenUtil';


export default class TaskListItem extends React.Component {
    render() {
        let {application_id, name, overdue_dates, end_time, admin_first,} = this.props.item;
        return (
            <TouchableOpacity onPress={this.props.onPressItem}>
                <View style={styles.container}>
                    <View style={styles.rowView}>
                        <Text style={styles.idTextStyle}>{`Application ID : ${application_id}`}</Text>

                        <View
                            style={[styles.btn, {backgroundColor: admin_first == 'First time' ? '#9ADEF9' : '#8BC34A'}]}>
                            <Text style={styles.btnText}>
                                {admin_first}
                            </Text>
                        </View>

                    </View>
                    <Text style={styles.normalText}>{`Name: ${name}`}</Text>
                    <View style={styles.rowView}>
                        <Text style={styles.normalText}>{`Overdue Dates: ${overdue_dates}`}</Text>
                        <Text style={styles.normalText}>{`EndTime: ${end_time}`}</Text>
                    </View>
                    <View
                        style={{
                            height: ScreenUtil.scaleSize(1),
                            backgroundColor: '#888',
                            maxWidth: ScreenUtil.screenW,
                            marginTop: ScreenUtil.scaleSize(10)
                        }}/>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: ScreenUtil.screenW,
        padding: ScreenUtil.scaleSize(10),
    },
    idTextStyle: {
        color: '#000',
        fontSize: ScreenUtil.setSpText(16),
        lineHeight: ScreenUtil.scaleSize(29)
    },
    normalText: {
        color: 'rgba(0,0,0,0.54)',
        fontSize: ScreenUtil.setSpText(14),
        lineHeight: ScreenUtil.scaleSize(24)
    },
    rowView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btn: {
        width: ScreenUtil.scaleSize(100),
        height: ScreenUtil.scaleSize(30),
        borderRadius: ScreenUtil.scaleSize(3),
        borderColor: '#bbb',
        borderWidth: ScreenUtil.scaleSize(1),
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        fontSize: ScreenUtil.setSpText(14),
        lineHeight: ScreenUtil.scaleSize(20),
        color: '#101010',

    }
});