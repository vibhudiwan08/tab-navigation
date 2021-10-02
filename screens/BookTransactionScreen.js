import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class TransactionScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text
          style={styles.text}
          >Facebook</Text>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    text: {
       color:'purple',
       fontSize:18,
       fontFamily:'algerian',
    }
  });
