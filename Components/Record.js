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
  FlatList,
  PermissionsAndroid,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';

import GoogleCloudSpeechToText, {
  SpeechRecognizeEvent,
  VoiceStartEvent,
  SpeechErrorEvent,
  VoiceEvent,
  SpeechStartEvent,
} from 'react-native-google-cloud-speech-to-text';

import {getCache} from '../Context/Cache';

const requestCameraPermission = async (setPermission) => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      {
        title: "Autonote permission record",
        message:
          "Cool Photo App needs access to your camera " +
          "so you can take awesome pictures.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the camera");
      setPermission(true);
    } else {
      console.log("Camera permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};



function Record(props) {
  const [isRecording, setIsRecording] = useState(false);
  const [permission, setPermission] = useState(false);

  const {transcript, setResult, note, setNote} = getCache();

  useEffect(() => {
    requestCameraPermission(setPermission);

    GoogleCloudSpeechToText.setApiKey('AIzaSyCqLLLMRVbbexk92Jlyjod-XJAPOVwClQk');
    GoogleCloudSpeechToText.onVoice(onVoice);
    GoogleCloudSpeechToText.onVoiceStart(onVoiceStart);
    GoogleCloudSpeechToText.onVoiceEnd(onVoiceEnd);
    GoogleCloudSpeechToText.onSpeechError(onSpeechError);
    GoogleCloudSpeechToText.onSpeechRecognized(onSpeechRecognized);
    GoogleCloudSpeechToText.onSpeechRecognizing(onSpeechRecognizing);
    return () => {
      GoogleCloudSpeechToText.removeListeners();
    };

  }, [])


  const onSpeechError = (_error) => {
    console.log('onSpeechError: ', _error);
  };

  const onSpeechRecognized = (result) => {
    setNote( data => {

      const buffer = [...data, result.transcript + '.'];
      console.log('onSpeechRecognized: ', buffer);

      return (buffer);
    })
    
    //setSentenceID(id => id + 1);
  };

  const onSpeechRecognizing = (result) => {
    console.log('onSpeechRecognizing: ', result);
  };

  const onVoiceStart = (_event) => {
    console.log('onVoiceStart', _event);
  };

  const onVoice = (_event) => {
    console.log('onVoice', _event);
  };

  const onVoiceEnd = () => {
    console.log('onVoiceEnd: ');
    
  };

  const startRecognizing = async () => {
    const result = await GoogleCloudSpeechToText.start({
      //speechToFile: true,
      languageCode: 'fr-FR'
    });

    setNote([]);
    console.log('startRecognizing', result);
  };

  const stopRecognizing = async () => {
    //setSentenceID(0);
    setResult(result => {
      const buffer = [...result, note]
      console.log("trab ", buffer);

      return buffer;
    })
    await GoogleCloudSpeechToText.stop();
  };


  return (
    <View>
      <Text style={{fontSize: 50, textAlign: 'center', fontWeight: 'bold'}}> {"Record\n\n"}</Text>
      <View style={{margin: 50}}>
      <FlatList
        data={note}
        renderItem={({ item }) => {
          //console.log('item ', item)
          return(
            <Text >{item}</Text>
          )
        }}
        keyExtractor={item => item}
      />
        <View style={{padding: 10}}>
          {!isRecording && <TouchableOpacity style={{ 
                  borderRadius: 20,
                  justifyContent: 'center', 
                  alignItems:'center',
                  backgroundColor: "black"
                  }}
                  onPress={() => { setIsRecording(true), startRecognizing()}}
                  > 
            <Text style={{color:'white', fontSize: 30}}>Start Recording</Text>
          </TouchableOpacity>}
          {isRecording && <TouchableOpacity style={{ 
                  borderRadius: 20,
                  justifyContent: 'center', 
                  alignItems:'center',
                  backgroundColor: "black"
                  }}
                  onPress={() => { setIsRecording(false); stopRecognizing()}}
                  > 
            <Text style={{color:'white', fontSize: 30}}>Stop Recording</Text>
          </TouchableOpacity>}
        </View>
        <View style={{padding: 80}}>
          {!isRecording && <TouchableOpacity style={{ 
                  borderRadius: 20,
                  justifyContent: 'center', 
                  alignItems:'center',
                  backgroundColor: "black"
                  }}
                  onPress={() => { props.navigation.navigate("Menu"); }}
                  > 
            <Text style={{color:'white', fontSize: 30}}>Menu</Text>
          </TouchableOpacity>}
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

export default Record;
