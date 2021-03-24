/**
 * @format
 */

import { Navigation } from "react-native-navigation";
import {registerScreens} from './src/screens';
registerScreens();


Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot({
    root: {
       stack: {
         children: [
           {
             component: {
              name: 'Initializing',
  //             options: { // Optional options object to configure the screen
  //      topBar: {
  //   visible: false,
  //   drawBehind: true,
  //   animate: false,
  // }
  //   }
             }
           }
         ]
       }
     }
  });
});

