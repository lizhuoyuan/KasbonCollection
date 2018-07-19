/**
 * Created by 李卓原 on 2018/7/6.
 * email: zhuoyuan93@gmail.com
 *
 */

import React from 'react';
import {createStackNavigator, createSwitchNavigator} from 'react-navigation';

import LoginPage from './page/LoginPage';
import TaskListPage from "./page/TaskListPage";
import TaskDetailsPage from "./page/TaskDetailsPage";
import NavigationBar from './common/NavigationBar';

const RootStack = createStackNavigator({
    TaskList: {screen: TaskListPage},
    TaskDetails: {screen: TaskDetailsPage}
}, {
    navigationOptions: ({navigation}) => ({
        header: <NavigationBar
            title={navigation.state.params && navigation.state.params.title ?
                navigation.state.params.title : navigation.state.routeName}
            showLeft={navigation.state.routeName !== 'TaskList'}
            navigation={navigation}
        />
    })
});

const LoginStack = createStackNavigator({
    Login: {screen: LoginPage}
}, {
    navigationOptions: ({navigation}) => ({
        header: <NavigationBar title={'Kasbon Collection'} showLeft={false}/>
    })
});

const SwitchNavigator = createSwitchNavigator({
    Login: LoginStack,
    RootStack: RootStack
});

export default SwitchNavigator;

