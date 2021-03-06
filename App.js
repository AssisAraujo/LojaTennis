import 'react-native-gestur-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {AppLoading} from 'expo';
import {useFonts, Anton_400Regular} from '@expo-google-fonts/anton';


import Routes from './src/router';
import { View } from 'react-native';

export default function App() {
let [fontsLoaded] = useFonts({
  Anton_400Regular,
});

if(!fontsLoaded){
  return<AppLoading/>
}

  return (
    <View>
      <StatusBar style="light" backgroundColor='#000' translucent={true} />
      <Routes/>
    </View>
  );
}


