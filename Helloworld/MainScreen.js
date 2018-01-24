'use strict';
import React from 'react';
import { StyleSheet,
         Text,
         View,
         Image, 
         ImageBackground, 
         Button,
         Alert,
         TouchableHighlight,
         Navigator,
        } from 'react-native';

import {
          StackNavigator,
        } from 'react-navigation';

import PropTypes from 'prop-types'

import RectangleButton from './RectangleButton';

import NextScreen from './NextScreen';

const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
}

export default class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
    header: null,
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
        <ImageBackground style={styles.container} >

            
            <View style={stylesBottomView.container}>
              <Text>Hello navigation</Text>
                <Button style={ stylesRB.container }
                    onPress={() => navigate('NextScreen', { user: 'Lucy' })}
                    title="react navigation Button"
                    color="#CCC"
                />
              <RectangleButton 
                style={stylesRectangleButtonLayoutBottom.container}
                titleName='NavigatorIOS Button' />

            </View>
            
        </ImageBackground>
        
        
    );
  }
}
// https://reactnavigation.org/
// https://facebook.github.io/react-native/docs/navigatorios.html#docsNav

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const stylesBottomView = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    marginBottom: 20,
  }
})

const stylesText = StyleSheet.create({
  container : {
    alignItems: 'center',
    justifyContent: 'center',
  }
})

const stylesImageBackground = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 375,
    height: 667,
  }
})



const stylesRectangleButtonLayoutBottom = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:-500,
  }
})

const stylesRB = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'rgb(39,220,40)',
        borderRadius:10,
        borderWidth: 1,
        borderColor: 'rgb(39,220,40)'
        },
    loginText: {
        color:'#fff',
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10
        }
})
