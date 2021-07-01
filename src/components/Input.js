import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

export function Input({style, ...props}) {
  return (
    <TextInput
      {...props}
      style={[styles.input, style]}
      placeholderTextColor={'#FEE715FF'}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#101820FF',
    width: '100%',
    padding: 20,
    borderRadius: 50,
    color: 'black',
  },
});
