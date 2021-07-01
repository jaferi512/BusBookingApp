import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const Booking = [
  {
    id: '1',
    From: 'Lahore',
    To: 'Multan',
    Dep_date: '13-05-2020',
    dep_time: '9:00 PM',
    Status: 'U',
    Seats: '11',
    Price: '1200',
  },
  {
    id: '2',
    From: 'Lahore',
    To: 'Garh More',
    Dep_date: '14-05-2020',
    dep_time: '9:00 PM',
    Status: 'P',
    Seats: '11',
    Price: '1200',
  },
  {
    id: '3',
    From: 'Islamabad',
    To: 'Lahore',
    Dep_date: '15-05-2020',
    dep_time: '9:00 PM',
    Status: 'P',
    Seats: '11',
    Price: '1200',
  },
  {
    id: '4',
    From: 'Lahore',
    To: 'Garh More',
    Dep_date: '14-05-2020',
    dep_time: '9:00 PM',
    Status: 'U',
    Seats: '11',
    Price: '1200',
  },
  {
    id: '5',
    From: 'Islamabad',
    To: 'Lahore',
    Dep_date: '15-05-2020',
    dep_time: '9:00 PM',
    Status: 'P',
    Seats: '11',
    Price: '1200',
  },
  {
    id: '6',
    From: 'Islamabad',
    To: 'Lahore',
    Dep_date: '15-05-2020',
    dep_time: '9:00 PM',
    Status: 'U',
    Seats: '11',
    Price: '1200',
  },
];

const BookingList = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: '#FEE715FF'}}>
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
          <Text style={{color: '#FEE715FF'}}>Bookings</Text>
        </View>
      </View>
      <ScrollView>
        {Booking.map(function (x, i) {
          return (
            <View
              key={i}
              style={{
                flexDirection: 'row',
                width: '99%',
                backgroundColor: '#101820FF',
                justifyContent: 'space-around',
                alignSelf: 'center',
                marginTop: 5,
              }}>
              <View style={{width: '10%', alignItems: 'center', padding: 5}}>
                <Icon name="bus" size={20} color="#FEE715FF" />
              </View>
              <View
                style={{
                  width: '40%',
                  justifyContent: 'space-between',
                  padding: 5,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text style={{color: '#FEE715FF'}}>From City:</Text>
                  </View>
                  <View>
                    <Text style={{color: '#FEE715FF'}}>{x.From}</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text style={{color: '#FEE715FF'}}>To City:</Text>
                  </View>
                  <View>
                    <Text style={{color: '#FEE715FF'}}>{x.To}</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text style={{color: '#FEE715FF'}}>Dep Date:</Text>
                  </View>
                  <View>
                    <Text style={{color: '#FEE715FF'}}>{x.Dep_date}</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text style={{color: '#FEE715FF'}}>Dep Time:</Text>
                  </View>
                  <View>
                    <Text style={{color: '#FEE715FF'}}>{x.dep_time}</Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: '10%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>|</Text>
              </View>
              <View
                style={{
                  width: '40%',
                  justifyContent: 'space-between',
                  padding: 5,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text style={{color: '#FEE715FF'}}>Status:</Text>
                  </View>
                  <View>
                    {x.Status === 'P' ?
                      <Text
                        style={{
                          color: '#101820FF',
                          backgroundColor: 'yellow',
                          padding: 2,
                          borderRadius: 10,
                        }}>
                        Paid
                      </Text>
                     : (
                      <Text
                        style={{
                          color: '#101820FF',
                          backgroundColor: 'white',
                          padding: 2,
                          borderRadius: 10,
                        }}>
                        UnPaid
                      </Text>
                    )}
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text style={{color: '#FEE715FF'}}>Seats:</Text>
                  </View>
                  <View>
                    <Text style={{color: '#FEE715FF'}}>{x.Seats}</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text style={{color: '#FEE715FF'}}>Price</Text>
                  </View>
                  <View>
                    <Text style={{color: '#FEE715FF'}}>{x.Price}</Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <TouchableOpacity
                    style={{
                      padding: 5,
                      backgroundColor: '#FEE715FF',
                      borderRadius: 10,
                      margin: 5,
                    }}>
                    <Text>View Order</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export {BookingList};

const styles = StyleSheet.create({});
