import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Menu from "../Components/Menu";
import Record from "../Components/Record";
import Keywords from '../Components/Keywords';
import MyNotes from '../Components/MyNotes';
import MyNotesMenu from '../Components/MyNotesMenu';
import NotePage from '../Components/NotePage';
import NoteKeywordsPage from '../Components/NoteKeywordsPage';
import AudioPage from '../Components/AudioPage';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Menu"
          component={Menu}
        />
        <Stack.Screen
          name="Record"
          component={Record}
        />
        <Stack.Screen
          name="Keywords"
          component={Keywords}
        />
        <Stack.Screen
          name="MyNotes"
          component={MyNotes}
        />
        <Stack.Screen
          name="MyNotesMenu"
          component={MyNotesMenu}
        />
        <Stack.Screen
          name="NotePage"
          component={NotePage}
        />
        <Stack.Screen
          name="NoteKeywordsPage"
          component={NoteKeywordsPage}
        />
        <Stack.Screen
          name="AudioPage"
          component={AudioPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;