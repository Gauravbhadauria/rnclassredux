import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addItemToCart} from './redux/CartSlice';
import {useNavigation} from '@react-navigation/native';
import {addItemToFav} from './redux/FavSlice';
import {FetchData} from './redux/ApiCallSlice';
import {useGetAllProductsByRtkQuery, useGetProductByIdQuery} from './redux/RTkDemoSlice';

const Products = () => {
  const reduxData = useSelector(state => state);
  const [allProducts, setAllProducts] = useState([]);
  const navigation = useNavigation();
  console.log(reduxData.cart.data.length);

  const dispatch = useDispatch();
  const apiData = useSelector(state => state.api);
  const {isError,isFetching,isLoading,isSuccess,data} = useGetAllProductsByRtkQuery();
  const productById=useGetProductByIdQuery(1)
  console.log("prodcut by id==>",productById)

  useEffect(() => {
    dispatch(FetchData());

    // getProducts();
  }, []);
  const getProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        json.map(item => {
          item.qty = 1;
        });
        setAllProducts(json);
      });
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 60,
          flexDirection: 'row',
          paddingLeft: 10,
          paddingRight: 10,
        }}>
        <Text>My Redux App</Text>
        <Text
          style={{
            backgroundColor: '#f2f2f2',
            color: 'black',
            fontWeight: '600',
            padding: 10,
          }}
          onPress={() => {
            navigation.navigate('Cart');
          }}>
          {`Cart Items (${reduxData.cart.data.length})`}
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 60,
          flexDirection: 'row',
          paddingLeft: 10,
          paddingRight: 10,
        }}>
        <Text>My Fav Items</Text>
        <Text
          style={{
            backgroundColor: '#f2f2f2',
            color: 'black',
            fontWeight: '600',
            padding: 10,
            textDecorationLine: 'underline',
          }}
          onPress={() => {
            navigation.navigate('Fav');
          }}>
          {`View Fav Items`}
        </Text>
      </View>
      <FlatList
        data={data}
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
              <View>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'green',

                    borderRadius: 10,
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingBottom: 10,
                    paddingTop: 10,
                  }}
                  onPress={() => {
                    dispatch(addItemToCart(item));
                  }}>
                  <Text style={{color: 'white'}}>Add To Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,

                    borderRadius: 10,
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingBottom: 10,
                    paddingTop: 10,
                    marginTop: 10,
                  }}
                  onPress={() => {
                    dispatch(addItemToFav(item));
                  }}>
                  <Text style={{color: 'black'}}>Add To Fav</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Products;

//redux persist
//storage: asyncs storage
