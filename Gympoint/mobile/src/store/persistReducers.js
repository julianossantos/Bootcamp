import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'gympoint', // essa key serve para identificar qual aplicação esta acessando a api, entáo se outra acessar não compartilha os states
      storage: AsyncStorage,
      whitelist: ['auth', 'user'], // reducers que precisa armazenar informações dos states
    },
    reducers
  );

  return persistedReducer;
};
