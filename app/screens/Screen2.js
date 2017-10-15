import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import I18n from 'ex-react-native-i18n';

class Screen2 extends Component {
    constructor(props){
        super(props);
    }

    handleNavigation() {
        this.props.navigation.navigate('Screen1');
    }

    render() {
        return (
            <View style={styles.main}>
                <Text>{I18n.t('bye')}</Text>
                <Text>{I18n.currentLocale()}</Text>
                <TouchableOpacity onPress={() => this.handleNavigation()}>
                <Text>{I18n.t("goScreen", {number: "1"})}</Text>
                </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Screen2;