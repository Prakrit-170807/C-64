import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity,} from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import db from './localdb'


export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      textinp: "",
      chunks: [],
    }
  }
  render(){
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Header backgroundColor={'black'} centerComponent={{ text: "Spelling Bee", style: { color: "white", fontSize: 20, width: 200, borderRadius:8, borderWidth:-1,} }}></Header>
          <Image style={styles.img} source={require("./spell bee.png")}></Image>
          <TextInput style={styles.textInput} value={this.state.textinp} onChangeText={(text)=>{(this.setState({textinp: text}))}}></TextInput>  
          <TouchableOpacity style={styles.touchableOpacity} onPress={()=>{this.setState({chunks:db[this.state.textinp].chunks})}}>
            <Text style={styles.text}>Spell</Text>
          </TouchableOpacity>
          <View>
            {this.state.chunks.map(item =>{
              return(
                <TouchableOpacity style={styles.touchableOpacity1}>
                <Text style={styles.text1}>{item}</Text>
                </TouchableOpacity>
              )
            })}
          </View>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  textInput: {
    marginTop:100,
    color:"black",
    borderWidth:5,
    borderColor:"#EEC229",
    borderRadius:10,
  },
  img:{
    marginTop:100,
    width: 200,
    height: 200,
  },
  text:{
    color:"#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1:{
    color:"#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableOpacity:{
    marginTop:60,
    backgroundColor: "black",
    color:"white",
    width:200,
    height:30,
    borderRadius:8,
    borderWidth:-1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableOpacity1:{
    marginTop:10,
    backgroundColor: "#EFC239",
    color:"white",
    width:200,
    height:30,
    borderRadius:8,
    borderWidth:-1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
