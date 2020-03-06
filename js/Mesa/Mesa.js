import React, { Fragment } from "react";
import { View, Text, SafeAreaView, StatusBar, ScrollView } from "react-native";
import { Icon } from "native-base";

const mesa = {
  id: int,
  Mestre: string,
  Nome: string,
  sessao: Date,
  local: string,

  jogadores: [
    {
      id: string,
      jogador: string,
      personagem: {
        id: string,
        nome: string,
        classe: Enum,
        raca: Enum,
        experiencia: int,
        nivel: int,
        antecedente: string,

        classeDeArmadura: int,
        vida: int,
        deslocamento: int,

        proeficiencia: int,

        forca: int,
        proeficienciaForca: int,
        modificadorForca: int,

        destreza: int,
        proeficienciaDestreza: int,
        modificadorDestreza: int,

        constituicao: int,
        proeficienciaConstituicao: int,
        modificadorConstituicao: int,

        inteligencia: int,
        proeficienciaInteligencia: int,
        modificadorInteligencia: int,

        sabedoria: int,
        proeficienciaInteligencia: int,
        modificadorInteligencia: int,
        
        

        magiasConhecidas: [
          {
            id: int,
            nome: string
          }
        ]
      }
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
      <Fragment>
        <SafeAreaView style={{ flex: 0 }} />
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar backgroundColor={"#ffc107"} barStyle={"dark-content"} />
          <ScrollView>
            <View style={{ height: 60, backgroundColor: "#ffc107" }}>
              <Icon type="FontAwesome" name="home" />
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}
