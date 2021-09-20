import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Button,ScrollView,FlatList,TouchableOpacity } from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height: 80,
        paddingTop: 38,
        backgroundColor:'coral'
    },
    title:{
        textAlign:'center',
        color:'#fff',
        fontSize:25,
        fontWeight:'bold'
    }
})