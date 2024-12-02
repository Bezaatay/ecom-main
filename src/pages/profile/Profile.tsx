import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import './i18n';
import Button from '../../components/button/button';

const App = () => {
  const { t, i18n } = useTranslation();

  function handleLang(lang: string) {
    i18n.changeLanguage(lang)
  }

  return (
    <View>
      <Text>{t('passo_ecom')}</Text>
      <Text>{t('empty_fav_list')}</Text>

      <Button title='Change Language' onPress={() => handleLang('en')} />
    </View>
  );
};

export default App;
