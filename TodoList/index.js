import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

global.tasks = [
    {
        "title": "Take out the trash",
        "desc": "Take out the garbage and recycling bins before the trucks arrive on Thursday morning",
        "date": "October 7, 2021",
        "id": 1
    },
    {
        "title": "Go grocery shopping",
        "desc": "Get some vegetables and some more fruits from the local SafeWay",
        "date": "October 9, 2021",
        "id": 2
    },
    {
        "title": "Restring tennis racquet",
        "desc": "Restring wilson pro staff 97 before my match on Tuesday",
        "date": "October 10, 2021",
        "id": 3
    }
]

AppRegistry.registerComponent(appName, () => App);
