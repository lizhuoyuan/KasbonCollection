/**
 * Created by 李卓原 on 2018/7/6.
 * email: zhuoyuan93@gmail.com
 *
 */

import React from 'react';
import {
    View,
    Image,
    TextInput,
    StyleSheet,
    FlatList,
} from 'react-native';

import * as ScreenUtil from '../utils/ScreenUtil';
import TaskListItem from '../components/TaskListItem';
import Fetch from "../net/Fetch";
import Url from '../net/Url';

export default class TaskListPage extends React.Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isRefreshing: false,
            text: ''
        };
    }

    componentDidMount() {
        this._getData()
    }

    _getData = () => {
        this.setState({
            isRefreshing: true
        });
        Fetch.post(Url.app_task_list, {"auditor_id": 1},
            result => {

                if (result.errno === 0) {
                    this.setState({
                        isRefreshing: false,
                        data1: result.data.task_list,
                        data2: result.data.task_list,
                    })
                }
            },
            error => {

            })
    }

    render() {
        let {data2} = this.state;

        return (
            <View style={styles.container}>

                <View style={styles.inputView}>
                    <Image source={require('../img/magnifier.png')} style={styles.magnifierImgStyle}/>
                    <TextInput
                        underlineColorAndroid={"transparent"}
                        style={styles.input}
                        onChangeText={this._searchItem}
                        //value={this.state.text}
                    />
                </View>

                <FlatList
                    keyExtractor={this._keyExtractor}
                    data={data2}
                    renderItem={this._renderItem}
                    onRefresh={this._getData}
                    refreshing={this.state.isRefreshing}
                />

            </View>
        );
    }

    _renderItem = ({item}) => (
        <TaskListItem
            item={item}
            onPressItem={() => this.props.navigation.navigate('TaskDetails',
                {title: `ApplicationID: ${item.application_id}`, task_id: item.task_id})}
        />
    );

    /**
     * 筛选list中符合搜索条件的item并展示
     * @param text
     * @private
     */
    _searchItem = (text) => {
        //this.setState({text});
        const {data1} = this.state;
        let searchList = [];
        const length = data1.length;
        for (let i = 0; i < length; i++) {
            for (let key in data1[i]) {
                let thisdata = (data1[i][key] + '').toLowerCase();
                //查看该属性是否含有搜索内容(忽略大小写)
                if (thisdata.indexOf(text.toLowerCase()) !== -1) {
                    searchList.push(data1[i]);
                    break;
                }
            }
        }
        //console.log(searchList);

        this.setState({data2: searchList})
    };

    _keyExtractor = (item, index) => index + '';

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    inputView: {
        flexDirection: 'row',
        alignItems: 'center',
        width: ScreenUtil.scaleSize(365),
        backgroundColor: '#e6e6fa',
        borderWidth: ScreenUtil.scaleSize(1),
        borderColor: 'rgba(0, 0, 0, 0.24)',
        borderRadius: ScreenUtil.scaleSize(2),
        marginVertical: ScreenUtil.scaleSize(10)
    },
    magnifierImgStyle: {
        width: ScreenUtil.scaleSize(17),
        height: ScreenUtil.scaleSize(17),
        marginHorizontal: ScreenUtil.scaleSize(15)
    },
    input: {
        flex: 1,
        height: ScreenUtil.scaleSize(50),
        padding: 0,
        fontSize: ScreenUtil.setSpText(14),
        color: '#888',

    }
});