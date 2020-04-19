import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableHighlight,
  Animated,
  Easing,
} from 'react-native';
import logo from './logo.png';

class App extends Component {
  state = {
    spinValue: new Animated.Value(0),
  };

  rotateImage = () => {
    const wasRotated = this.state.spinValue._value === 1;
    Animated.timing(this.state.spinValue, {
      toValue: wasRotated ? 0 : 1,
      duration: 1000,
      easing: Easing.linear,
    }).start();
  };

  render() {
    const spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '720deg'],
    });
    const web = Platform.OS === 'web';

    const imageStyles = web ?
    styles.webLogo :
    styles.logo
    return (
      <View style={styles.container}>
        <View style={{display: 'flex', flexDirection: 'row', marginVertical: 50}}>
          <Animated.Image
            source={logo}
            style={[imageStyles, {transform: [{rotate: spin}]}]}
          />
          <Animated.Image
            source={logo}
            style={[imageStyles, {transform: [{rotate: spin}]}]}
          />
        </View>

        {!web && (
          <Text style={styles.text}>
            Você está prestes a cair no genjustsu. Após ele, você vai dar uma
            mamadinha glub glub
          </Text>
        )}
        <TouchableHighlight
          onPress={this.rotateImage}
          style={styles.button}
          underlayColor={'#0A84D0'}>
          <Text style={styles.buttonText}>Manda o genjustsu brabo aí</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  webLogo: {
    width: 300,
    height: 300,
    marginHorizontal: 40
  },
  logo: {
    width: 150,
    height: 150,
    marginHorizontal: 20
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  text: {
    color: '#fff',
    width: 250,
    marginBottom: 30,
  },
  button: {
    borderRadius: 3,
    padding: 20,
    marginVertical: 10,
    marginTop: 10,
    backgroundColor: '#1B95E0',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default App;
