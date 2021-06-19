/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  BackHandler
} from 'react-native';

function Menu(props) {
  return (
    <View>
      <Text style={{fontSize: 50, textAlign: 'center', fontWeight: 'bold'}}> {"Menu\n\n"}</Text>
      <View style={{margin: 50}}>
        <View style={{padding: 20}}>
          <TouchableOpacity style={{ 
          borderRadius: 20,
          justifyContent: 'center', 
          alignItems:'center',
          backgroundColor: "black"
          }}
          onPress={() => { props.navigation.navigate('Record') }}
          > 
            <Text style={{color:'white', fontSize: 30}}>Record</Text>
          </TouchableOpacity>
        </View>
        <View style={{padding: 20}}>
          <TouchableOpacity style={{ 
          borderRadius: 20,
          justifyContent: 'center', 
          alignItems:'center',
          backgroundColor: "black"
          }}
          onPress={() => { props.navigation.navigate('Keywords') }}
          > 
            <Text style={{color:'white', fontSize: 30}}>Keywords</Text>
          </TouchableOpacity>
        </View>
        <View style={{padding: 20}}>
          <TouchableOpacity style={{ 
          borderRadius: 20,
          justifyContent: 'center', 
          alignItems:'center',
          backgroundColor: "black"
          }}
          onPress={() => { props.navigation.navigate('MyNotes') }}
          > 
            <Text style={{color:'white', fontSize: 30}}>My Notes</Text>
          </TouchableOpacity>
        </View>
        <View style={{padding: 20}}>
          <TouchableOpacity style={{ 
          borderRadius: 20,
          justifyContent: 'center', 
          alignItems:'center',
          backgroundColor: "black"
          }}
          onPress={() => { BackHandler.exitApp(); }}
          > 
            <Text style={{color:'white', fontSize: 30}}>Exit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    color: "grey",
  },
});

export default Menu;
