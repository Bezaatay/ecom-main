import * as React from 'react';
import AppNavigation from './src/navigation';
import Loader from './src/components/loader/component';
import { Button, NativeModules } from 'react-native';

export default function App() {

  const { CalendarModule } = NativeModules;

  const onPress = () => {
    CalendarModule.createCalendarEvent('testName', 'testLocation');
  };

  return (
    <>
      {/* <AppNavigation />
      <Loader /> */}
      <Button title='Click Me' onPress={onPress} />
    </>
  );
}
