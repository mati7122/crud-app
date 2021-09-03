/**
 * @format
 */
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// AppRegistry.registerComponent(appName, () => {
//     return(
//         <SWRConfig
//             value={{
//                 provider: () => new Map(),
//                 isVisible: () => {return true} 
//             }}
//         >
//             <App/>
//         </SWRConfig>
//     );
// });

AppRegistry.registerComponent(appName, () => App)
