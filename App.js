import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import TransactionScreen from './screens/BookTransactionScreen';
import SearchScreen from './screens/SearchScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return (<SafeAreaProvider>
      <Header 
            backgroundColor={'#56A3BF'}
            centerComponent={{
              text: 'Buzz App',
              style: { color: '#fff', fontSize: 28 },
            }}
          />
        <View style={styles.container}>
          <AppContainer />
        </View>
      </SafeAreaProvider>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Insta: { screen: TransactionScreen },
  Fb: { screen: SearchScreen },
});
const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20,
  },
});
