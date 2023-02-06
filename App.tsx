import React, {Component} from 'react';

import {StatusBar, SafeAreaView, View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class App extends Component {
  render() {
    return (
      <>
        <StatusBar />
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.heading}>Matching Game</Text>
          </View>
          <View style={styles.main}>
            <View style={styles.gameBoard}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>😎</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>😎</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>😎</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>😎</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>😎</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>😎</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>😎</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>😎</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.footer}>
            <Text style={styles.footerText}>Footer Text</Text>
          </View>
        </SafeAreaView>
      </>
    )
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  header: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },

  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  main: {
    flex: 3,
    backgroundColor: '#fff',
  },

  footer: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },

  footerText: {
    fontSize: 20,
    textAlign: 'center',
  },

  gameBoard: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },

  button: {
    backgroundColor: '#ccc',
    borderRadius: 8,
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
});
