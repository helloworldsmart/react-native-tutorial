'use strict';
import React, { Component } from 'react';
import { StyleSheet,
         Text,
         View,
         Image, 
         ImageBackground, 
         Button,
         Alert,
         TouchableHighlight,
         ScrollView, } from 'react-native';

         import {
            StackNavigator,
          } from 'react-navigation';

export default class NextScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `Chat with ${navigation.state.params.user}`,
        header: null,
      });

      constructor(props) {
          super(props)
      }

      componentWillMount() {

      }

            render() {
              return (
                <View>
                  <Button onPress={this.props.navigation.goBack()} title={'Go Back'} />
                </View>
              );
            }
          }
          
         
          
          const styles = StyleSheet.create({
            container: {
              flex: 1,
            },
          });


