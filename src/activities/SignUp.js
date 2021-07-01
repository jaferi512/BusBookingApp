import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView, Image} from 'react-native';

import {Input} from '../components/Input';
import {FilledButton} from '../components/FilledButton';
import {TextButton} from '../components/TextButton';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const SignUp = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#FEE715FF',
      }}>
      <View
        style={{
          height: '20%',
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
          <Image
            source={require('../assets/images/bus_logo.png')}
            style={{height: 200, width: 200}}
          />
        </View>
        {/* <Icon name="bus" size={70} color="#FEE715FF" /> */}
      </View>
      <View style={{width: '95%', height: '70%'}}>
        <ScrollView>
          <Input
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Name"
          />
          <Input
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email"
          />
          <Input
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Mobile No"
          />
          <Input
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Address"
          />
          <Input
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Gender"
          />
          <Input
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="CNIC"
          />
          <Input
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Password"
          />
        </ScrollView>
        <View>
          <FilledButton
            title={'SignUp'}
            style={styles.loginButton}
            /*         onPress={async () => {
          try {
            setLoading(true);
            await login(username, password);
          } catch (e) {
            setError(e.message);
            setLoading(false);
          }
        }} */
          />
          <TextButton
            title={'Have an account? Login'}
            onPress={() => {
              navigation.navigate('login');
            }}
          />
        </View>
      </View>
    </View>
  );
};

export {SignUp};

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
