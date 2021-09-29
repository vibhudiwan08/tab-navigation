import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class TransactionScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text
          style={styles.text}
          >Insta</Text>
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