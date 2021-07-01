import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, View, Image, Animated} from 'react-native';
import {Input} from '../components/Input';
import {FilledButton} from '../components/FilledButton';
import {TextButton} from '../components/TextButton';
const Tension = () => {
  const LogoAnime = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(LogoAnime, {
      toValue: 1,
      duration: 500,
      delay: 300,
      useNativeDriver: true,
    }).start();
  });
  return LogoAnime;
};
const LogIn = ({navigation}) => {
  const LogoAnime = Tension();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FEE715FF',
      }}>
      <View
        style={{
          height: '24%',
          //backgroundColor: '#101820FF',
          width: '50%',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 30,
        }}>
        <View
          style={{
            height: 210,
            width: 210,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Animated.View
            style={{
              transform: [
                {
                  translateY: LogoAnime.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-600, 0],
                  }),
                },
              ],
              width: '95%',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Image
              source={require('../assets/images/bus_logo.png')}
              style={{height: 200, width: 200}}
            />
          </Animated.View>
        </View>
        {/* <Icon name="bus" size={70} color="#FEE715FF" /> */}
      </View>
      <View style={{width: '95%'}}>
        <Animated.View
          style={{
            transform: [
              {
                translateX: LogoAnime.interpolate({
                  inputRange: [0, 1],
                  outputRange: [600, 0],
                }),
              },
            ],
            width: '95%',
            borderRadius: 12,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Input
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Username"
          />
        </Animated.View>
        <Animated.View
          style={{
            transform: [
              {
                translateX: LogoAnime.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-600, 0],
                }),
              },
            ],
            width: '95%',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Input
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Password"
          />
        </Animated.View>
        <Animated.View
          style={{
            transform: [
              {
                translateY: LogoAnime.interpolate({
                  inputRange: [0, 1],
                  outputRange: [600, 0],
                }),
              },
            ],
            width: '95%',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <FilledButton
            title={'Login'}
            style={styles.loginButton}
            onPress={() => {
              navigation.navigate('main');
            }}
          />
          <TextButton
            title={'Have u an account? Create one'}
            onPress={() => {
              navigation.navigate('signup');
            }}
          />
        </Animated.View>
      </View>
    </View>
  );
};
export {LogIn};
const styles = StyleSheet.create({
  title: {
    marginBottom: 48,
  },
  input: {
    marginVertical: 8,
  },
  loginButton: {
    marginVertical: 32,
  },
});
