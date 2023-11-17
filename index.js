import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { initializeApp } from '@react-native-firebase/app';
import App from './src/App'; // Certifique-se de ajustar o caminho conforme a estrutura do seu projeto

const firebaseConfig = {
    apiKey: "AIzaSyAO64KO5mMSX2KsMfPHx3QysYIMhbxBGEU",
    authDomain: "medcare-673e9.firebaseapp.com",
    projectId: "medcare-673e9",
    storageBucket: "medcare-673e9.appspot.com",
    messagingSenderId: "674470348706",
    appId: "1:674470348706:web:1b88053c7662b784db14fb"
};

initializeApp(firebaseConfig);

AppRegistry.registerComponent(appName, () => App);

