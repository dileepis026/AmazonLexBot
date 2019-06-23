import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import Amplify from 'aws-amplify';

Amplify.configure({
  Auth: {
    identityPoolId: 'us-east-1:77dcf386-0c54-44c4-b602-9c189dfe5671',
    region: 'us-east-1'
  },
  Interactions: {
    bots: {
      "WeatherBot": {
        "name": "WeatherBot",
        "alias": "$LATEST",
        "region": "us-east-1",
      },
    }
  }
});
AppRegistry.registerComponent(appName, () => App);
