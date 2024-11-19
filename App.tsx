import * as React from 'react';
import AppNavigation from './src/navigation';
import Loader from './src/components/loader/component';

export default function App() {
  return (
    <>
      <AppNavigation />
      <Loader />
    </>
  );
}
