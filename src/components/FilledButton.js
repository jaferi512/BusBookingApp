import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';

export function FilledButton({title, style, onPress}) {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      style={[styles.container, style, {backgroundColor: '#101820FF'}]}
      onPress={onPress}>
      <Text style={styles.text}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 30,
    marginBottom:5,
  },
  text: {
    color: '#FEE715FF',
    fontWeight: '500',
    fontSize: 16,
  },
});
