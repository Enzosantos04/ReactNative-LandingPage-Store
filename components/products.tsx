import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';



type Product = {
    id: number
    image: string
    name: string
    price: number
}

function handleClick(){
    alert('Successfuly added to the cart.', )
}
export  function Products(props: Product){
    return <View style={styles.boxProducts}>
    <Image source={{ uri: props.image }} style={styles.imgProducts} />
        <View style={styles.body}>
        <Text style={styles.productName}>{props.name}</Text>
        <Text style={styles.textPrice}>${props.price}</Text>
        <TouchableOpacity style={styles.button}  onPress={handleClick}>
            <Text style={styles.textButton}>Buy Now</Text>
        </TouchableOpacity>
        </View>
    </View>

    
}


const styles = StyleSheet.create({


    boxProducts: {
        width: '45%',      
        margin: 10,
        padding: 10,
        alignItems: 'center', 
      
    },
    imgProducts: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginBottom: 10,
        borderRadius: 5,
         
    },

    body:{
        paddingLeft:10,
        justifyContent: 'space-around', 
    },

    textPrice:{
        fontSize: 18,
        color: 'black',
        marginTop:10,
    },

    productName: {
        fontSize: 10,
        fontWeight: 'bold',
    

    },

    button:{
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#006633',
        borderRadius: 5,
        width: 80
    },

    textButton: {
        color: 'white'
    }

   
   
 });
