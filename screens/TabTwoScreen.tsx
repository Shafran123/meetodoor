import { StyleSheet, View, Text, FlatList, Image } from 'react-native';
import { ArrowRight, ChevronDown, ChevronRight, ChevronUp, Filter, Home, Scan, Search } from 'react-native-iconly';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScanIcon from '../assets/icons/ScanIcon';
import SearchIcon from '../assets/icons/SearchIcon';

import EditScreenInfo from '../components/EditScreenInfo';
import ProductItem from '../components/ProductItem/ProductItem';
import Stock from '../components/StockComponent/Stock';

const TabTwoScreen = (props: any) => {

  let data = [
    {
      id: 1,
      title: 'Vegetables',
      up: '247',
      down: '89',
      color: '#EEF5EE'
    },
    {
      id: 2,
      title: 'Sweet Food',
      up: '247',
      down: '89',
      color: '#EAEBFA'
    },
    {
      id: 3,
      title: 'Snack',
      up: '247',
      down: '89',
      color: '#FBEDDE'
    },
    {
      id: 4,
      title: 'Fruits',
      up: '247',
      down: '89',
      color: '#EEF6EC'
    },
    {
      id: 5,
      title: 'Bverages',
      up: '247',
      down: '89',
      color: '#EEF6EC'
    },
    {
      id: 6,
      title: 'Others',
      up: '247',
      down: '89',
      color: '#EEF6EC'
    },
  ]

  const renderItem = (data: any) => (
    console.log(data, 'props'),
    <ProductItem data={data} onPress={() =>props.navigation.navigate('ScreenTwo')} />
  );


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>
          Products
        </Text>

        <View style={styles.headerIconView}>
          <ScanIcon />
          <SearchIcon />
        </View>
      </View>

      <View style={styles.spacer}>

      </View>

      <View style={styles.stockView}>
        <Stock heading={'Total Products'} value={'128'} percentage={'+8.00%'} color={'#4E905A'} backgroundColor={'#EBF8EB'} />
        <Stock heading={'Stock In Hand'} value={'2,350'} percentage={'+2.34%'} color={'#44B5E5'} backgroundColor={'#EBFBFE'} />
      </View>

      <View style={styles.spacer}>

      </View>

      <View style={styles.productListContainer}>
        <Text style={styles.subText}>
          Product List
        </Text>
        <Filter stroke='bold' primaryColor={'grey'} />
      </View>

      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
        //keyExtractor={item => item.id}
        />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  spacer: {
    marginVertical: 20,
  },
  headerView: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 34,
    color: 'black',
    fontFamily:'PoppinSemiBold'
  },
  headerIconView: {
    width: '25%',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  stockView: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  subText: {
    fontSize: 18,
    color: 'grey',
    fontWeight: '600',
    fontFamily:'PoppinSemiBold'
  },
  productListContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export default TabTwoScreen