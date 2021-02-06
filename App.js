import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, Header } from 'react-navigation-stack';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text onPress={() => this.props.navigation.navigate('Test')}>Home Screen</Text>
      </View>
    );
  }
}
class TestScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Test Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Test: {
    screen: TestScreen,
  }
});

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen, 
  }, 
  Test: {
    screen: TestScreen, 
  }
})

const AppContainer = createAppContainer(AppNavigator);
class App extends React.Component {
  render () {
    <React.Fragment>
      <Header centerComponent={{ text: "MY TITLE", style: {color: '#fff' }}} backgroundColor='#00BCD4' containerStyle
    </React.Fragment>
  }
}
export default createAppContainer(AppNavigator);