import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const TimeSelect = [
  {
    Time: '11:00 AM',
    From: 'Lahore',
    To: 'Garh More',
    Fare: '1500',
    Mode: 'Bussiness Class',
  },
  {
    Time: '11:00 PM',
    From: 'Lahore',
    To: 'Lyyah',
    Fare: '800',
    Mode: 'Standard Class',
  },
  {
    Time: '7:00 PM',
    From: 'Lahore',
    To: 'Shorkot',
    Fare: '950',
    Mode: 'Exective Class',
  },
  {
    Time: '11:00 AM',
    From: 'Lahore',
    To: 'Garh More',
    Fare: '1500',
    Mode: 'Bussiness Class',
  },
  {
    Time: '11:00 PM',
    From: 'Chowk Azam',
    To: 'Lahore',
    Fare: '800',
    Mode: 'Standard Class',
  },
  {
    Time: '7:00 PM',
    From: 'Shorkot',
    To: 'Lahore',
    Fare: '950',
    Mode: 'Exective Class',
  },
  {
    Time: '3:00 AM',
    From: 'Shorkot',
    To: 'Lahore',
    Fare: '950',
    Mode: 'Exective Class',
  },
];

const TimeSection = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center',backgroundColor:'#FEE715FF'}}>
      <View
        style={{
          height: '8%',
          backgroundColor: '#101820FF',
          width: '100%',
          flexDirection: 'row',
          borderBottomWidth:1,
          borderColor:'#FEE715FF',
        }}>
        <View
          style={{
            width: '20%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="arrow-left" size={25} color="#FEE715FF" />
        </View>
        <View
          style={{
            width: '80%',
            justifyContent: 'center',
            padding: 5,
          }}>
          <Text style={{color:'#FEE715FF'}}>Time Selection</Text>
        </View>
      </View>
      <ScrollView>
        {TimeSelect.map(function (x, i) {
          return (
            <View
              key={i}
              style={{
                height: 90,
                backgroundColor: '#101820FF',
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-around',
                borderBottomWidth:0.5,
                borderColor:'#FEE715FF',
              }}>
              <View
                style={{
                  width: '20%',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                <Icon name="bus" size={30} color="#FEE715FF" />
                <Text style={{color:'#FEE715FF'}}>{x.Time}</Text>
              </View>
              <View
                style={{
                  width: '50%',
                  alignItems: 'center',
                  height:80,
                  justifyContent:'center'
                }}>
                <View style={{flexDirection: 'row',width:'100%',justifyContent:'space-around',alignItems:'center'}}>
                  <View>
                    <Text style={{color:'#FEE715FF'}}>{x.From}</Text>
                  </View>
                  <View>
                    <Icon name="arrow-right" size={20} color="#FEE715FF" />
                  </View>
                  <View style={{alignItems:'flex-end'}}>
                    <Text style={{color:'#FEE715FF'}}>{x.To}</Text>
                  </View>
                </View>
                <View>
                  <Text style={{color:'#FEE715FF'}}>{x.Mode}</Text>
                  <Text style={{color:'#FEE715FF'}}>Available Seats: 26</Text>
                </View>
              </View>
              <View
                style={{
                  width: '30%',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                <Text style={{color:'#FEE715FF'}}>{x.Fare}</Text>
                <TouchableOpacity
                  style={{
                    padding: 7,
                    backgroundColor: '#FEE715FF',
                    borderRadius: 10,
                  }}>
                  <Text>Book Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export {TimeSection};

const styles = StyleSheet.create({});
