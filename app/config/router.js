import React from 'react';
import { StackNavigator} from 'react-navigation';

import I18n from 'ex-react-native-i18n';
import './translations';

import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';

export const AppStack = StackNavigator({
    Screen1: {
        screen: Screen1,
        navigationOptions: {
            title: I18n.t("screen", {number: "1"}),
        },
    },
    Screen2: {
        screen: Screen2,
        navigationOptions: {
            title: I18n.t("screen", {number: "2"}),
        },
    },
});