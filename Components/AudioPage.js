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

 
 function AudioPage(props) {
   const {currentNote, setCurrentNote} = getCache();
 
   return (
     <View>
       <Text style={{fontSize: 50, textAlign: 'center', fontWeight: 'bold'}}> {currentNote["title"] + "\n\n"}</Text>
       <View style={{padding: 20}}>
       <Text style={{fontSize: 20, textAlign: 'center',}}> {"Audio"}</Text>
        </View>
        <View style={{padding: 80}}>
           <TouchableOpacity style={{ 
             borderRadius: 20,
             justifyContent: 'center', 
             alignItems:'center',
             backgroundColor: "black"
             }}
      
      onPress={() => { props.navigation.navigate("MyNotesMenu"); }}
           > 
             <Text style={{color:'white', fontSize: 30}}>Back</Text>
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
 
 export default AudioPage;
 