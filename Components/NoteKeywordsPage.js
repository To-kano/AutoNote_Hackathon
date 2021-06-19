/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState, useEffect} from 'react';
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

 
 function NoteKeywordsPage(props) {
  const {currentNote, selectedKeywords} = getCache();
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    const result = currentNote.filter((sentence) => {

      let buffer = false;

      selectedKeywords.forEach(key => {
        console.log("key = ", key, ' sentence = ', sentence, " resolve ", sentence.includes(key));
        if (sentence.includes(key)) {
          buffer = true;
        }
      })
      return buffer;
    })
    console.log('key filter', result);
    setDisplay(result)
  }, [])
 
   return (
     <View>
       <Text style={{fontSize: 50, textAlign: 'center', fontWeight: 'bold'}}> {'note' + "\n\n"}</Text>
       <View style={{padding: 20}}>
       <FlatList
        data={display}
        
        renderItem={({ item }) => {
          //console.log('item ', item)
          return(
            <Text style={{fontSize: 20, textAlign: 'center',}} >{item}</Text>
          )
        }}
        keyExtractor={item => item}
      />
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
 
 export default NoteKeywordsPage;
 