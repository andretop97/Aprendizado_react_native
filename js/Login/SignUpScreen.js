import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  BackHandler,
  TouchableOpacity,
  AsyncStorage
} from "react-native";

import firebase from "firebase";
//const

export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: "",
      Password: "",
      nome: "",
      erro: ""
    };
  }
  async componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
    const userToken = await AsyncStorage.getItem("userToken");
    if (userToken) {
      this.props.navigation.navigate("Home");
    }
  }

  handleBackPress = () => {
    this.props.navigation.navigate("Login");
    return true;
  };

  register = () => {
    const { Email, Password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(Email, Password)
      .then(response => {
        AsyncStorage.setItem("userToken", response.user.getIdToken.toString());
      })
      .catch(error => this.setState({ erro: error.message }));

    const userToken = AsyncStorage.getItem("userToken");
    if (userToken) {
      this.props.navigation.navigate("Home");
    }
  };

  render() {
    return (
      <View style={style.container}>
        <View style={style.header}>
          <Text
            style={{
              fontSize: 25,
              color: "#1a1a1a",
              fontWeight: "bold",
              marginLeft: 20
            }}
          >
            DreaMakers
          </Text>
        </View>
        <View style={style.form}>
          <TextInput
            style={style.Input}
            placeholder="Email"
            placeholderTextColor="#ffc107"
            onChangeText={Email => this.setState({ Email })}
            value={this.state.Email}
          />

          <TextInput
            style={style.Input}
            placeholder="Senha"
            placeholderTextColor="#ffc107"
            onChangeText={Password => this.setState({ Password })}
            secureTextEntry={true}
            value={this.state.Senha}
          />

          <TouchableOpacity
            style={style.Button}
            onPress={() => this.register()}
          >
            <Text>Registrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  Input: {
    justifyContent: "center",
    fontSize: 25,
    height: 50,
    color: "#ffc107",
    margin: 10,
    width: "90%",
    borderColor: "#ffc107",
    borderWidth: 1,
    alignSelf: "center",
    borderRadius: 10
  },
  form: {
    flex: 9,
    backgroundColor: "#292b2c",
    justifyContent: "center"
  },
  header: {
    flex: 1,
    backgroundColor: "#ffc107",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    justifyContent: "center"
  },
  Button: {
    width: "90%",
    backgroundColor: "#ffc107",
    alignSelf: "center",
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
    padding: 10
  },
  ButtonText: {
    color: "#292b2c",
    fontSize: 20
  }
});
