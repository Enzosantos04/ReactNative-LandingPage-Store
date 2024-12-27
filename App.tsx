import { View, Text, StyleSheet, SafeAreaView, FlatList, Image,} from 'react-native';
import { Products } from './components/products';
import {list} from './data';
  

function App() {
  
  return(
    <View style={styles.Background}>
    <SafeAreaView style={styles.header}>
    <Image source={require("./assets/logo-flu.png")} style={styles.headerImage}/>
    </SafeAreaView>
  <Image source={require("./assets/banner-flu.png")} style={styles.bannerImage}/>
    <Text style={styles.subTitleText}>Most Popular Products</Text>
    <FlatList 
     data={list}
     renderItem={({item}) => (
      <Products image={item.image}  name={item.name} price={item.price} id={item.id} />
    )}
    keyExtractor={(item) => item.id.toString()}
    numColumns={2}
    contentContainerStyle={styles.ContainerStyle}
    />
    </View>
    
  )

 
}

const styles = StyleSheet.create({
Background:{
backgroundColor:'#F8F8F8',
height:'100%',
},
header:{
  backgroundColor:'#006633',
  width:'100%',
  height: 125,
  alignItems: 'center',

},
headerImage:{
  height:'100%',
width:'55%',
padding: 10,
resizeMode:'contain',
},

bannerImage:{
  height:120,
  width:'100%',
  resizeMode:'cover',
  backgroundColor:'blue'
 
},


subTitleText:{
  marginTop: 17,
 fontFamily: 'System',
 fontSize: 19,
 textAlign: 'center',
 fontWeight: 'bold',
 color: '#333333',
 textTransform: 'uppercase',
 marginBottom:5,

},

ContainerStyle:{
paddingHorizontal: 10,
}, 


})
export default App;

