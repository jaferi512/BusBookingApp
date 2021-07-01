import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Icon2 from 'react-native-vector-icons/dist/MaterialCommunityIcons';
const Profile = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#FEE715FF'}}>
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
          <Text style={{color: '#FEE715FF'}}>Profile</Text>
        </View>
      </View>
      <View
        style={{
          width: '98%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignSelf: 'center',
          backgroundColor: '#FEE715FF',
          marginBottom: 20,
          padding: 5,
        }}>
        <Text style={{fontSize: 16, color: 'black'}}>User Profile</Text>
        <TouchableOpacity
          onPress={() => {
            alert('edit Profile');
          }}>
          <Text style={{fontSize: 16, color: 'black'}}>Edit</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.profile_sub_container}>
          <View style={styles.profile_sub_card_container}>
            <View style={styles.profile_sub_card_left}>
              <Icon name="user" size={20} color="#101820FF" />
            </View>
            <View style={styles.profile_sub_card_right}>
              <View style={styles.profile_sub_card_right_left}>
                <Text>Name</Text>
              </View>
              <View style={styles.profile_sub_card_right_right}>
                <Text>03046282189</Text>
              </View>
            </View>
          </View>
          <View style={styles.profile_sub_card_container}>
            <View style={styles.profile_sub_card_left}>
              <Icon2 name="email" size={20} color="#101820FF" />
            </View>
            <View style={styles.profile_sub_card_right}>
              <View style={styles.profile_sub_card_right_left}>
                <Text>Email</Text>
              </View>
              <View style={styles.profile_sub_card_right_right}>
                <Text>adii@gmail.com</Text>
              </View>
            </View>
          </View>
          <View style={styles.profile_sub_card_container}>
            <View style={styles.profile_sub_card_left}>
              <Icon name="mobile-phone" size={20} color="#101820FF" />
            </View>
            <View style={styles.profile_sub_card_right}>
              <View style={styles.profile_sub_card_right_left}>
                <Text>Phone</Text>
              </View>
              <View style={styles.profile_sub_card_right_right}>
                <Text>03046282189</Text>
              </View>
            </View>
          </View>
          <View style={styles.profile_sub_card_container}>
            <View style={styles.profile_sub_card_left}>
              <Icon name="vcard" size={20} color="#101820FF" />
            </View>
            <View style={styles.profile_sub_card_right}>
              <View style={styles.profile_sub_card_right_left}>
                <Text>CNIC</Text>
              </View>
              <View style={styles.profile_sub_card_right_right}>
                <Text>03046282189</Text>
              </View>
            </View>
          </View>
          <View style={styles.profile_sub_card_container}>
            <View style={styles.profile_sub_card_left}>
              <Icon name="key" size={20} color="#101820FF" />
            </View>
            <View style={styles.profile_sub_card_right}>
              <TouchableOpacity
                onPress={() => {
                  alert('Edit Password');
                }}
                style={{width: '70%'}}>
                <Text>Change Password</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.profile_sub_card_container}>
            <View style={styles.profile_sub_card_left}>
              <Icon name="transgender" size={20} color="#101820FF" />
            </View>
            <View style={styles.profile_sub_card_right}>
              <View style={styles.profile_sub_card_right_left}>
                <Text>Gender</Text>
              </View>
              <View style={styles.profile_sub_card_right_right}>
                <Text>Male</Text>
              </View>
            </View>
          </View>
          <View style={styles.profile_sub_card_container}>
            <View style={styles.profile_sub_card_left}>
              <Icon name="address-book" size={20} color="#101820FF" />
            </View>
            <View style={styles.profile_sub_card_right}>
              <View style={styles.profile_sub_card_right_left}>
                <Text>Address</Text>
              </View>
              <View style={styles.profile_sub_card_right_right}>
                <Text>Basti Ghaziabad</Text>
              </View>
            </View>
          </View>
          <View style={styles.profile_sub_card_container}>
            <View style={styles.profile_sub_card_left}>
              <Icon name="bookmark" size={20} color="#101820FF" />
            </View>
            <View style={styles.profile_sub_card_right}>
              <View style={styles.profile_sub_card_right_left}>
                <Text>Zip Code</Text>
              </View>
              <View style={styles.profile_sub_card_right_right}>
                <Text>35200</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export {Profile};

const styles = StyleSheet.create({
  profile_sub_container: {
    width: '100%',
    //backgroundColor: '#FEE715FF',
  },
  profile_sub_card_container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    backgroundColor: '#FEE715FF',
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 5,
  },
  profile_sub_card_left: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile_sub_card_right: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1.5,
  },
  profile_sub_card_right_left: {
    width: '30%',
  },
  profile_sub_card_right_right: {
    width: '70%',
    alignItems: 'flex-end',
  },
});
