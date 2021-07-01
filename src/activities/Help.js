import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Help = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#101820FF'}}>
      <View
        style={{
          height: '8%',
          backgroundColor: '#101820FF',
          width: '100%',
          flexDirection: 'row',
          borderBottomWidth: 1,
          borderColor: '#FEE715FF',
        }}>
        <View
          style={{
            width: '15%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('home');
            }}>
            <Icon name="arrow-left" size={25} color="#FEE715FF" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '85%',
            justifyContent: 'center',
            padding: 5,
          }}>
          <Text style={{color: '#FEE715FF'}}>Help</Text>
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            flex: 1,
            width: '95%',
            backgroundColor: '#FEE715FF',
            alignSelf: 'center',
            height: 500,
            justifyContent: 'center',
            marginTop:20,
          }}>
          <View
            style={{
              alignSelf: 'center',
              height: 70,
              width: 70,
              //backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="question-circle" size={45} color="#101820FF" />
          </View>
          <View style={{alignSelf: 'center', padding: 10}}>
            <Text style={{fontSize: 20}}>Need Help In Booking??</Text>
          </View>
          <View style={{padding: 10}}>
            <Text>
              Call Our Customer Services team on the number below to Speak to
              one of our advises who will help you with all of your needs.
            </Text>
          </View>
          <View style={{alignSelf: 'center', padding: 10}}>
            <Text>+923-111-155-255</Text>
          </View>
          <View style={{alignSelf: 'center', padding: 10}}>
            <Icon name="phone" size={35} color="#101820FF" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export {Help};

const styles = StyleSheet.create({});
