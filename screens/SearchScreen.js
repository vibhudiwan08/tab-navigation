import React from 'react';
import { Text, View,StyleSheet } from 'react-native';

export default class Searchscreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',color:'red' }}>
          <Text
          style={styles.text}
          >Face
          book</Text>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    text: {
       color:'red',
       fontSize:18,
       fontFamily:'algerian',
    }
  });