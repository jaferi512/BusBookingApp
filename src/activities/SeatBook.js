import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';
const booking = [
  {
    id: 1,
    flag: 'male',
    fare: 800,
  },
  {
    id: 2,
    flag: 'male',
    fare: 800,
  },
  {
    id: 3,
    flag: 'disable',
    fare: 800,
  },
  {
    id: 4,
    flag: 'female',
    fare: 800,
  },
  {
    id: 5,
    flag: 'female',
    fare: 800,
  },
  {
    id: 6,
    flag: 'available',
    fare: 800,
  },
  {
    id: 7,
    flag: 'male',
    fare: 800,
  },
  {
    id: 8,
    flag: 'available',
    fare: 800,
  },
  {
    id: 9,
    flag: 'male',
    fare: 800,
  },
  {
    id: 10,
    flag: 'available',
    fare: 800,
  },
  {
    id: 11,
    flag: 'female',
    fare: 800,
  },
  {
    id: 12,
    flag: 'male',
    fare: 800,
  },
  {
    id: 13,
    flag: 'male',
    fare: 800,
  },
  {
    id: 14,
    flag: 'available',
    fare: 800,
  },
  {
    id: 15,
    flag: 'male',
    fare: 800,
  },
  {
    id: 16,
    flag: 'male',
    fare: 800,
  },
  {
    id: 17,
    flag: 'male',
    fare: 800,
  },
  {
    id: 18,
    flag: 'available',
    fare: 800,
  },
  {
    id: 19,
    flag: 'female',
    fare: 800,
  },
  {
    id: 20,
    flag: 'available',
    fare: 800,
  },
  {
    id: 21,
    flag: 'available',
    fare: 800,
  },
  {
    id: 22,
    flag: 'male',
    fare: 800,
  },
];
import Modal from 'react-native-modal';
const SeatBook = () => {
  const [book, setbook] = useState(booking);
  const [select, setselect] = useState([]);
  const [price, setprice] = useState(0);
  const [id, setid] = useState('');
  const [gender, setgender] = useState('');
  const [fair, setfair] = useState(0);

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const forceUpdate: () => void = React.useState()[1].bind(null, {});
  const done = (id) => {
    const data = select;
    data.push({title: id});
    setselect(data);
  };

  const set_female = (id) => {
    console.log(id);
    let ok = book;
    ok.forEach((element) => {
      if (element.id == id) {
        element.flag = 'female';
      }
    });
  };

  const set_male = (id) => {
    console.log(id);
    let ok = book;
    ok.forEach((element) => {
      if (element.id == id) {
        element.flag = 'male';
      }
    });
  };

  const set_book = (gen) => {
    //console.log('Welcome to Book Detail');
    const data = select;
    data.push({seat_no: id, fair: price, Gender: gen});
    /* data.push(id);
      data.push(price); */
    setselect(data);
    setfair(fair + price);
    console.log(id);
    //console.log(fair);
    console.log(select);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FEE715FF'}}>
      <StatusBar barStyle="dark-content" />
      <View
        style={{
          height: 80,
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor:'#101820FF',
          width:'100%',
        }}>
        <View
          style={{
            width: 80,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Image
            source={require('../assets/images/available.png')}
            style={{height: 40, width: 80}}
          />
          <Text style={{color:'#FEE715FF'}}>Availabale</Text>
        </View>
        <View
          style={{
            width: 60,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Image
            source={require('../assets/images/male.png')}
            style={{height: 40, width: 80}}
          />
          <Text style={{color:'#FEE715FF'}}>Male</Text>
        </View>
        <View
          style={{
            width: 60,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Image
            source={require('../assets/images/female.png')}
            style={{height: 40, width: 80}}
          />
          <Text style={{color:'#FEE715FF'}}>Female</Text>
        </View>
        {/*       <View style={{width:60,alignItems:'center',justifyContent:'space-around'}}>
          <Image source={require('./src/selected.png')} style={{height:40,width:80}} />
          <Text>Selected</Text>
        </View> */}
        <View
          style={{
            width: 60,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <View
            style={{
              height: 50,
              width: 50,
              backgroundColor: '#FEE715FF',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#101820FF', fontSize: 14}}>Price</Text>
            <Text style={{color: '#101820FF', fontSize: 16}}>{fair}</Text>
          </View>
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            flex: 1,
            flexDirection: 'row-reverse',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            backgroundColor: '#FEE715FF',
          }}>
          {book.map(function (x, i) {
            switch (x.flag) {
              case 'male':
                return (
                  <TouchableOpacity
                    key={i}
                    style={{
                      width: '20%',
                      alignItems: 'center',
                      margin: 5,
                      borderRadius: 10,
                    }}>
                    <Image
                      source={require('../assets/images/male.png')}
                      style={{height: 40, width: 80}}
                    />
                    <Text style={{color:'#101820FF'}}>{x.id}</Text>
                  </TouchableOpacity>
                );
              case 'female':
                return (
                  <TouchableOpacity
                    key={i}
                    style={{
                      width: '20%',
                      alignItems: 'center',
                      margin: 5,
                      borderRadius: 10,
                    }}>
                    <Image
                      source={require('../assets/images/female.png')}
                      style={{height: 40, width: 80}}
                    />
                    <Text>{x.id}</Text>
                  </TouchableOpacity>
                );
              case 'available':
                return (
                  <TouchableOpacity
                    onPress={() => {
                      toggleModal(), setid(x.id), setprice(x.fare);
                    }}
                    key={i}
                    style={{
                      width: '20%',
                      alignItems: 'center',
                      margin: 5,
                      borderRadius: 10,
                    }}>
                    <Image
                      source={require('../assets/images/available.png')}
                      style={{height: 40, width: 80}}
                    />
                    <Text>{x.id}</Text>
                    <Modal
                      isVisible={isModalVisible}
                      onSwipeComplete={toggleModal}
                      swipeDirection={['up', 'left', 'right', 'down']}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: '#D3D3D3',
                          flexDirection: 'row',
                          justifyContent: 'space-around',
                        }}>
                        <TouchableOpacity
                          onPress={() => {
                            set_male(id);
                            toggleModal();
                            set_book((gen = 'male'));
                          }}
                          style={{
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            padding: 10,
                          }}>
                          <Image
                            source={require('../assets/images/male.png')}
                            style={{height: 40, width: 80}}
                          />
                          <Text>Male</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => {
                            set_female(id);
                            toggleModal();
                            set_book((gen = 'female'));
                          }}
                          style={{
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            padding: 10,
                          }}>
                          <Image
                            source={require('../assets/images/female.png')}
                            style={{height: 40, width: 80}}
                          />
                          <Text>Female</Text>
                        </TouchableOpacity>
                      </View>
                      <Button title="Hide modal" onPress={toggleModal} />
                    </Modal>
                  </TouchableOpacity>
                );
              case 'disable':
                return (
                  <TouchableOpacity
                    key={i}
                    style={{
                      width: '20%',
                      alignItems: 'center',
                      margin: 10,
                    }}
                  />
                );
            }
          })}
        </View>
      </ScrollView>
      <View style={{margin: 5, justifyContent: 'space-around'}}>
        <TouchableOpacity
          onPress={() => alert('Payment')}
          style={{
            paddingLeft: '40%',
            paddingRight: '40%',
            backgroundColor: '#101820FF',
            justifyContent: 'center',
            borderRadius: 10,
            padding: 10,
          }}>
          <Text style={{color: '#FEE715FF', fontWeight: 'bold'}}>Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export {SeatBook};

const styles = StyleSheet.create({});
