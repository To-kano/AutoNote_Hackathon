/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
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
  TextInput,
  FlatList,
  Image
} from 'react-native';

import {getCache} from '../Context/Cache';


function Keywords(props) {
  const [tmp, setTmp] = useState('');

  const {selectedKeywords, setSelectedKeywords} = getCache();

  return (
    <View>
      <Text style={{fontSize: 50, textAlign: 'center', fontWeight: 'bold'}}> {"Keywords\n\n"}</Text>
      <View style={{ 
      justifyContent: 'center', 
      alignItems:'center',
      }}>
        <View style={{padding: 20}}>
            <TextInput
              autoCapitalize={'none'}
              style={styles.textInput}
              placeholder="Keywords you want to find on the notes"
              onChangeText={(text) => setTmp(text)}
              value={tmp}
            />
        </View>
        <View>
            <TouchableOpacity style={{ 
            borderRadius: 10,
            justifyContent: 'center', 
            alignItems:'center',
            alignSelf: "flex-start",
            backgroundColor: "black",
            }}
            onPress={() => { setSelectedKeywords([...selectedKeywords, tmp]); setTmp('') }}
          > 
              <Text style={{color:'white', fontSize: 30}}> Validate </Text>
            </TouchableOpacity>
        </View>
      </View>
      <View style={{padding: 20}}>
        <Text style={{fontSize: 30}}>Selected Keywords:</Text>
       
        <View style={{margin: 5}}>
          <FlatList
              data={selectedKeywords}
              horizontal={true}
              renderItem={({ item }) => (
                <TouchableOpacity style={{ 
                  borderRadius: 20,
                  justifyContent: 'center', 
                  alignItems:'center',
                  alignSelf: "flex-start",
                  borderColor: "black",
                  borderWidth: 5,
                  margin: 3,
                  }}
                  onPress={() => { setSelectedKeywords(selectedKeywords.filter(key => key != item)); }}
                > 
                    <Text style={{color:'black', fontSize: 30}}>{" " + item + " "}
                      <Image style={{height: 20, width: 20}} source={require("../assets/close-button.png")}/>
                      {" "}
                    </Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => String(item)}
          />
         
        </View>
      </View>
        <View style={{padding: 80}}>
          <TouchableOpacity style={{ 
            borderRadius: 20,
            justifyContent: 'center', 
            alignItems:'center',
            backgroundColor: "black"
            }}
            onPress={() => { props.navigation.navigate("Menu"); }}
          > 
            <Text style={{color:'white', fontSize: 30}}>Menu</Text>
          </TouchableOpacity>
        </View>
    </View>

  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: '100%',
    borderRadius: 21,
    marginRight: 12.5,
    paddingLeft: 12.5,
    backgroundColor: '#FFFFFF',
  },
});

export default Keywords;
