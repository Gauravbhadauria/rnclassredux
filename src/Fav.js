import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  addItemToCart,
  removeItem,
  removeItemFromCart,
} from '../redux/CartSlice';
import {removeItemFromFav} from '../redux/FavSlice';

const Fav = () => {
  const cartData = useSelector(state => state.fav);
  const dispatch = useDispatch();
  return (
    <View>
      <FlatList
        data={cartData.data}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: '90%',
                height: 80,
                borderRadius: 10,
                alignSelf: 'center',
                marginTop: 20,
                backgroundColor: '#f2f2f2',
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 10,
                paddingRight: 10,
              }}>
              <Image
                source={{uri: item.image}}
                style={{width: 60, height: 60, borderRadius: 10}}
              />
              <View style={{width: '50%'}}>
                <Text style={{fontSize: 16, fontWeight: '600', marginLeft: 10}}>
                  {item.title.length > 20
                    ? item.title.substring(0, 20) + '...'
                    : item.title}
                </Text>
              </View>
              <TouchableOpacity
                style={{borderWidth: 1, borderRadius: 10, padding: 10}}
                onPress={() => {
                  dispatch(removeItemFromFav(item.id));
                }}>
                <Text>Remove Fav</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Fav;
