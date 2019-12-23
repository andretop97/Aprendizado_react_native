import React, { Component } from 'react';
import { Text , View , TextInput } from 'react-native';

//const

export default class Main extends Component {
  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: '#ffc107', justifyContent: "center" }}>
            <Text style = {{fontSize:25, color:"#1a1a1a", fontWeight: 'bold', marginLeft: 20}}>batata</Text>
        </View>
        <View style={{flex: 9, backgroundColor: '#333333' , justifyContent: 'center'}}>
          <View style = {{}}>
            <TextInput
             style = {{justifyContent: 'center',fontSize: 25,height: 50 , color: "#ffc107"}}
             placeholder = "Nome"
             placeholderTextColor = "#ffc107"

             />

             <TextInput
              style = {{justifyContent: 'center',fontSize: 25, height: 50 , color: "#ffc107"}}
              placeholder = "Senha"
              placeholderTextColor = "#ffc107"

              />
          </View>
        </View>
      </View>
    );
  }
}