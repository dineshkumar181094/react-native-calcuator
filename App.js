/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Alert,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({ children, title }): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  let [expression, updateExpression] = useState('0');
  let [result, updateResult] = useState(0);

  let updateRes = exp => {
    try {
      // Alert.alert("Got called once");
      let ans = eval(exp);
      updateResult(ans);
    } catch {
      // Alert.alert('invalid expression');
    }
  }
  let updateExp = e => {
    if (e === 'clear') {
      updateExpression('0');
      updateResult(0);
      return
    }
    if (e === 'back') {
      if (expression.length <= 1) {
        updateExpression('0');
        updateResult(0);
        return
      }
      updateExpression(expression.slice(0, -1));
      updateRes(expression.slice(0, -1));
      return
    }
    if (expression === '0') {
      updateExpression(e);
      updateRes(e);
      return
    }
    updateExpression(expression + e);
    updateRes(expression + e);

  }
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{result}</Text>
      <Text style={styles.paragraph}>{expression}</Text>
      <View style={styles.calculatorCotainer}>
        <View style={styles.buttonStyle}>
          <Button title='+' onPress={() => { updateExp('+') }} />
        </View>
        <View style={styles.buttonStyle} >
          <Button title='-' onPress={() => { updateExp('-') }} />
        </View>
        <View style={styles.buttonStyle}>
          <Button title='*' onPress={() => { updateExp('*') }} />
        </View>
        <View style={styles.buttonStyle} >
          <Button title='/' onPress={() => { updateExp('/') }} />
        </View>
      </View>
      <View style={styles.calculatorCotainer}>
      <View style={styles.buttonStyle} >
          <Button title='1' onPress={() => { updateExp('1') }} />
        </View>
        <View style={styles.buttonStyle} >
          <Button title='2' onPress={() => { updateExp('2') }} />
        </View>
        <View style={styles.buttonStyle} >
          <Button title='3' onPress={() => { updateExp('3') }} />
        </View>
      </View>
      <View style={styles.calculatorCotainer}>
        <View style={styles.buttonStyle} >
          <Button title='4' onPress={() => { updateExp('4') }} />
        </View>
        <View style={styles.buttonStyle} >
          <Button title='5' onPress={() => { updateExp('5') }} /></View>
        <View style={styles.buttonStyle} >
          <Button title='6' onPress={() => { updateExp('6') }} />
        </View>
      </View>
      <View style={styles.calculatorCotainer}>
        <View style={styles.buttonStyle} >
          <Button title='7' onPress={() => { updateExp('7') }} />
        </View>
        <View style={styles.buttonStyle} >
          <Button title='8' onPress={() => { updateExp('8') }} />
        </View>
        <View style={styles.buttonStyle} >
          <Button title='9' onPress={() => { updateExp('9') }} />
        </View>
      </View>
      <View style={styles.calculatorCotainer}>
        <View style={styles.buttonStyle} >
          <Button title="0" onPress={() => { updateExp('0') }} />
        </View>
        <View style={styles.buttonStyle} >
          <Button title="clear all" onPress={() => { updateExp('clear') }} />
        </View>
        <View style={styles.buttonStyle} >
          <Button title="back" onPress={() => { updateExp('back') }} />
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    backgroundColor: '#ecf0f1',
    padding: 10,
    display: 'flex',
  },
  paragraph: {
    marginTop: 24,
    fontSize: 30,
    marginBottom: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonStyle: {
    flex: 1,
    fontSize: 30,
    // backgroundColor: 'green',
    borderRadius: 30,
    margin: 2,
    height: 120,
    alignItems: 'stretch',
  },
  calculatorCotainer: {
    borderRadius: 100,
    paddingTop: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    height: 100,
    alignItems: 'stretch',
  },
});
export default App;
