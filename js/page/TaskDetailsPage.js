/**
 * Created by 李卓原 on 2018/7/6.
 * email: zhuoyuan93@gmail.com
 *
 */

import React from 'react';
import {
    View,
    StyleSheet,
    FlatList
} from 'react-native';

import * as ScreenUtil from '../utils/ScreenUtil';
import TaskDetailsTextView from "../components/TaskDetailsTextView";
import DetailsBommtomTel from '../components/DetailsBommtomTel';
import Url from "../net/Url";
import Fetch from "../net/Fetch";

export default class TaskDetailsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }

    componentDidMount() {
        this._getData()
    }

    _getData = () => {
        this.setState({
            isRefreshing: true
        });
        Fetch.post(Url.app_task_detail,
            {"auditor_id": 1, "task_id": this.props.navigation.getParam('task_id', 1)},
            result => {

                if (result.errno === 0) {
                    this.setState({
                        data: result.data
                    })
                }
            },
            error => {

            })
    };


    render() {
        let {user_contacts} = this.state.data;
        return (
            <View style={styles.container}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    keyExtractor={this._keyExtractor}
                    ListHeaderComponent={this._renderHeader}
                    data={user_contacts}
                    renderItem={this._renderItem}/>
            </View>
        )
    }

    _renderItem = ({item}) => {
        return (
            <DetailsBommtomTel
                item={item}
            />
        )
    };

    _renderHeader = () => {
        let {data} = this.state;
        return (
            <View style={styles.detailStyle}>
                <TaskDetailsTextView
                    key1={`Name`} value1={data.name}/>
                <TaskDetailsTextView
                    key1={`Gender`} value1={data.gender}
                    key2={`Age`} value2={data.age}/>
                <TaskDetailsTextView
                    key1={`CreatedDate`} value1={data.created_time}
                    key2={`EndDate`} value2={data.end_time}/>
                <TaskDetailsTextView
                    key1={`Duration`} value1={data.duration}
                    key2={`Amount`} value2={data.amount}/>
                <TaskDetailsTextView
                    key1={`OverdueDates`} value1={data.overdue_dates}
                    key2={`Penalty`} value2={data.penalty}/>
                <TaskDetailsTextView
                    key1={`ToPay`} value1={data.left_refund}
                    key2={`VA`} value2={data.va_id}/>
            </View>
        )
    }

    _keyExtractor = (item, index) => index + '';
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: ScreenUtil.scaleSize(20),
        backgroundColor: '#fff',

    },
    normalText: {
        color: '#101010',
        fontSize: ScreenUtil.setSpText(14),
        lineHeight: ScreenUtil.scaleSize(20),
        marginBottom: ScreenUtil.scaleSize(10)
    },
    detailStyle: {
        flex: 1,
        alignItems: 'center',
        marginBottom: ScreenUtil.scaleSize(20),
        marginHorizontal: ScreenUtil.scaleSize(10)
    }
});