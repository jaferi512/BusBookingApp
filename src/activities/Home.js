import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#FEE715FF'}}>
      <View
        style={{
          height: '8%',
          flexDirection: 'row',
          backgroundColor: '#101820FF',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={{margin: 5, justifyContent: 'center', alignItems: 'center'}}>
          <Icon name="bars" size={30} color="#FEE715FF" />
        </TouchableOpacity>
        <View
          style={{margin: 5, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: '#FEE715FF'}}>Home</Text>
        </View>
        <View
          style={{margin: 5, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('auth');
            }}>
            <Icon name="sign-out" size={30} color="#FEE715FF" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{height: '25%'}}>
        <View style={{height: '22%', width: '100%'}}>
          <Image
            source={require('../assets/images/bus_ad2.png')}
            style={{height: 180, width: '100%'}}
          />
        </View>
      </View>
      <ScrollView>
        <View style={{backgroundColor: 'yellow', width: '100%'}}>
          <View>
            <Text
              style={{
                color: '#101820FF',
                fontSize: 16,
                marginLeft: 5,
                fontWeight: 'bold',
              }}>
              Search Bus
            </Text>
          </View>
          <View
            style={{
              width: '95%',
              backgroundColor: '#101820FF',
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderRadius: 10,
              padding: 5,
            }}>
            <View>
              <View>
                <Text style={{color: '#FEE715FF'}}>From</Text>
              </View>
              <View>
                <TextInput
                  placeholder="Select City"
                  placeholderTextColor="#FEE715FF"
                />
              </View>
              <View>
                <Text style={{color: '#FEE715FF'}}>To</Text>
              </View>
              <View>
                <TextInput
                  placeholder="Select City"
                  placeholderTextColor="#FEE715FF"
                />
              </View>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                margin: 10,
              }}>
              <Icon name="bus" size={30} color="#FEE715FF" />
            </View>
          </View>
          <View
            style={{
              width: '95%',
              alignSelf: 'center',
              flexDirection: 'row',
              backgroundColor: '#101820FF',
              padding: 5,
              margin: 5,
              borderRadius: 10,
              justifyContent: 'space-between',
            }}>
            <View>
              <View>
                <Text style={{color: '#FEE715FF'}}>Date</Text>
              </View>
              <View>
                <TextInput
                  placeholder="Select City"
                  placeholderTextColor="#FEE715FF"
                />
              </View>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                margin: 15,
              }}>
              <Icon name="calendar" size={30} color="#FEE715FF" />
            </View>
          </View>
          <View
            style={{
              width: '95%',
              alignSelf: 'center',
              padding: 5,
              margin: 5,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#101820FF',
                alignItems: 'center',
                padding: 10,
                borderRadius: 10,
              }}>
              <Text style={{color: '#FEE715FF'}}>Search</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      {/*       <View
        style={{
          height: '8%',
          backgroundColor: '#101820FF',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Icon name="home" size={30} color="#FEE715FF" />
          <Text style={{color: '#FEE715FF'}}>Home</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Icon name="book" size={30} color="#FEE715FF" />
          <Text style={{color: '#FEE715FF'}}>My Booking</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Icon name="question-circle" size={30} color="#FEE715FF" />
          <Text style={{color: '#FEE715FF'}}>Help</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Icon name="user" size={30} color="#FEE715FF" />
          <Text style={{color: '#FEE715FF'}}>Profile</Text>
        </View>
      </View> */}
    </View>
  );
};

export {Home};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
