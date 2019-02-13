import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import BottomNav from '../functions/bottom-nav.js';


export default class Home extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            /*<View style={styles.container}>
                {this.props.loaded ? <Text style={styles.welcome}>Welcome to React Native!</Text> : null}
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <BottomNav />
            </View>*/
            <View style={{ flex: 1, backgroundColor: 'white' , justifyContent: 'flex-end'}}>
                <BottomNav />
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
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'white'
    },
});

