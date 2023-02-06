import React, {Component} from 'react';

import {
  StatusBar,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import Card from './Card';

class App extends Component {
  state = {
    cardSymbols: ['👌', '💕', '🎶', '😶‍🌫️', '🥱', '🤑', '🤔', '🥸'],
    cardSymbolsInRand: [],
    isOpen: [],
    firstPickedIndex: null,
    secondPickedIndex: null,
  };

  componentDidMount() {
    let newCardsSymbols = [
      ...this.state.cardSymbols,
      ...this.state.cardSymbols,
    ];
    let cardSymbolsInRand = this.shuffleArray(newCardsSymbols);

    let isOpen = [];
    for (let i = 0; i < newCardsSymbols.length; i++) {
      isOpen.push(false);
    }

    this.setState({
      cardSymbolsInRand,
      isOpen,
    });
  }

  shuffleArray = (arr: string | any[]) => {
    const newArr = arr.slice();
    for(let i = newArr.length -1; i > 0; i--){
      const rand = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]]
    }
    return newArr
  }

  cardPressHandler = (index) => {
    console.log(index)
    let isOpen = [...this.state.isOpen];
    isOpen[index] = true;

    if (
      this.state.firstPickedIndex == null &&
      this.state.secondPickedIndex == null
    ) {
      this.setState({
        isOpen,
        firstPickedIndex: index,
      });
    } else if (
      this.state.firstPickedIndex != null &&
      this.state.secondPickedIndex == null
    ) {
      this.setState({
        isOpen,
        secondPickedIndex: index,
      });
    }
  };

  calculateGameResult = () => {
    console.log('cacaca')
    if (this.state.firstPickedIndex != null && this.state.secondPickedIndex != null) {
      let firstSymbol = this.state.cardSymbolsInRand[this.state.firstPickedIndex];
      let secondSymbol = this.state.cardSymbolsInRand[this.state.secondPickedIndex];

      if (firstSymbol != secondSymbol) {
        setTimeout(()=>{
          let isOpen = [...this.state.isOpen]
          isOpen[this.state.firstPickedIndex] = false;
          isOpen[this.state.secondPickedIndex] = false;

          this.setState({
            firstPickedIndex: null,
            secondPickedIndex: null,
            isOpen,
          })
        }, 500)
      } else {
        this.setState({
          firstPickedIndex: null,
          secondPickedIndex: null,
        })
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('update')
    console.log(prevState)
    
    if (prevState.secondPickedIndex != this.state.secondPickedIndex) {
      this.calculateGameResult()
    }
  }


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
              {this.state.cardSymbolsInRand.map((symbol, index)=>
                  <Card
                  key={index}
                  onPress={() => this.cardPressHandler(index)}
                  style={styles.button}
                  fontSize={30}
                  title={symbol}
                  cover="❓"
                  isShow={this.state.isOpen[index]}
                />)}
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
    margin: (Dimensions.get('window').width - 48 * 4) / (5 * 2),
  },
});
