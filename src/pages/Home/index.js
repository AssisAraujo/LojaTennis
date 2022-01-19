import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';


export default function Home(){
    return(
        <View style={styles.container}>
            <View style={style.header}>
                <Image 
                souce={require('../../assets/banner.png')}
                style={styles.image}
                />

                <View style={style.textcontainer}>
                    <Text style={styles.text}>TÊNIS</Text>
                    <Text style={styles.text}>TÊNIS</Text>
                    <Text style={styles.text}>TÊNIS</Text>
                </View>

            </View>
            
        </View>
    );
}


const styles = StyleSheet.create({
   container:{
       flex: 1,
       width: '100%',
       backgroundColor: '#fff'
   },
   header:{
       marginBottom: 8
   },
   image:{
       width: '100%'
   }

});