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

 function getMyNotes() {
  return ([
    {title: "Note 1", note: "Je voudrais un site web construit en ReactJs. Pas de souci nous avons des développeurs pour cela."},
  ])

 }
 
 function Keywords(props) {
   const [myNotes, setMyNotes] = useState(getMyNotes());
   const [buffer, setBuffer] = useState(null);

   const {currentNote, setCurrentNote, transcript} = getCache();
   
   useEffect(() => {
    if (buffer) {
      setCurrentNote(buffer);
      setBuffer();
      props.navigation.navigate('MyNotesMenu');
     }
     //return () => setBuffer({});
   }, [buffer])

//   useEffect(() => {
//    console.log("currentNote= ", currentNote);
//     if (currentNote) {
//      props.navigation.navigate('MyNotesMenu');
//     }
//}, [currentNote]);
 
   return (
     <View>
       <Text style={{fontSize: 50, textAlign: 'center', fontWeight: 'bold'}}> {"My Notes\n\n"}</Text>
       <View style={{padding: 20}}>
         <View style={{margin: 5}}>
           <FlatList
               data={transcript}
               renderItem={({ item }) => (
                 <TouchableOpacity style={{ 
                   borderRadius: 20,
                   justifyContent: 'center', 
                   alignItems:'center',
                   borderColor: "black",
                   borderWidth: 5,
                   margin: 3,
                   }}
                   onPress={() => { setBuffer(item); }}
                 > 
                     <Text style={{color:'black', fontSize: 30}}>{"Note"}</Text>
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
 