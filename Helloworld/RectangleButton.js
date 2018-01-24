'use strict';
import React from 'react';
import { StyleSheet,
         Text,
         View,
         Image, 
         ImageBackground, 
         Button,
         Alert,
         TouchableHighlight,} from 'react-native';

import { StackNavigator,
          } from 'react-navigation';

export default class RectangleButton extends React.Component {

    constructor(props){
        super(props)
            this.state = {
            isOnPress: false,
            
            }
        }
          
    handleOnPress(e) {
        this.setState({
            isOnPress: !this.state.isOnPress,

            })
        }
    
          
    render() {
        
        return (
            <View style={styles.container}>
                <Button
                  onPress={this.handleOnPress.bind(this)}
                  title={this.props.titleName}
                  color="#000000"
                  />
            </View>
            )
        }
    }

    const styles = StyleSheet.create({
        container: {
            marginRight:40,
            marginLeft:40,
            marginTop:10,
            paddingTop:10,
            paddingBottom:10,
            paddingRight:60,
            paddingLeft:60,
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