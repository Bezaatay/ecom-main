import * as React from 'react';
import AppNavigation from './src/navigation';
import Loader from './src/components/loader/component';
import { Button, NativeModules } from 'react-native';
import AppModule from './src/components/appModule';

export default function App() {

  return (
    <>
      {/* <AppNavigation />
      <Loader /> */}
      <AppModule />
    </>
  );
}
