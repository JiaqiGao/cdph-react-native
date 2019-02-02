import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Contents extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                {this.props.loaded ? <Text style={styles.welcome}>Welcome to React Native!</Text> : null}
                <Text style={styles.instructions}>To get started, edit App.js</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
