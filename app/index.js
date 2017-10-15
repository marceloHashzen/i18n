import React, { Component } from 'react';
import I18n from 'ex-react-native-i18n';
import { AppStack } from './config/router';

import './config/translations';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    async componentWillMount() {
        I18n.initAsync();
    }

    render() {
        return <AppStack />;
    }
}