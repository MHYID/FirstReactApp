import React, { Component } from 'react'
import { Text, View, Image, TextInput } from 'react-native'
const  App =  () => {
  return (
    <View>
      <View style={{ width:80, height:80, backgroundColor:'#0abde3' }} />
      <Text>ANJAY</Text>
      <Home />
      <Text>ANJAY</Text>
      <Gambar />
      <TextInput style={{ borderWidth:1 }} />
      <BoxGreen />
      <Profile />
    </View>
  )
}

const Home = () => {
  return <Text>Anjaylani Bjier</Text>
}

const Gambar = () => {
  return (
    <Image 
    source={{ uri: 'https://placeimg.com/100/100/tech' }} 
    style={{ width:100, height:100  }}
  />
  );
};

class BoxGreen extends Component{
  render(){
    return <Text>Ini dari class</Text>
  }
}

class Profile extends Component{
  render(){
    return(
      <View>
        <Image 
    source={{ uri: 'https://placeimg.com/100/100/animals' }} 
    style={{ width:100, height:100, borderRadius:50  }} />
    <Text style={{ color:'blue' }}>Ini Hewan Kucing</Text>
      </View>
    ) 
  }
}

export default App
