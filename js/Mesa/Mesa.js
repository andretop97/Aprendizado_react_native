import React from "react";
import { View, Text } from "react-native";

const mesa = {
  id: "asgdiuaid123",
  Mestre: "Felipe",
  Nome: "Word of Warcraft",
  jogadores: [
    {
      NomeJogador: "Andre",
      NomePersonagem: "João Prodigio"
    },
    {
      NomeJogador: "Kamilla",
      NomePersonagem: "Ela"
    },
    {
      NomeJogador: "Carlos",
      NomePersonagem: "Baldur"
    },
    {
      NomeJogador: "Willian Junior",
      NomePersonagem: "Euclides"
    }
  ]
};
export default class Mesa extends React.Component {
  render() {
    return (
      <View>
        <Text>Batata</Text>
      </View>
    );
  }
}
