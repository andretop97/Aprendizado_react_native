import { View, Button, StyleSheet, AsyncStorage, FlatList } from "react-native";
import React, { Component } from "react";
import firebase from "firebase";
import {
  Container,
  Header,
  Body,
  Title,
  Tabs,
  Tab,
  TabHeading,
  Icon,
  Card,
  CardItem,
  Text,
  Left,
  Thumbnail
} from "native-base";

const data = [
  {
    id: "00",
    name: "Skyrim",
    mestre: "Felipe",
    img_mestre: require("../../img/pp.jpeg")
  },
  {
    id: "01",
    name: "League of Legends",
    mestre: "Batata",
    img_mestre: require("../../img/pp.jpeg")
  },
  {
    id: "03",
    name: "batata",
    mestre: "Batata",
    img_mestre: require("../../img/pp.jpeg")
  }
];

const Index = ({ ListaDeMesas }) =>
  ListaDeMesas.map(mesa => (
    <Card key={mesa.id}>
      <CardItem>
        <Left>
          <Thumbnail source={mesa.img_mestre} />

          <Body>
            <Text>{mesa.name}</Text>
            <Text note>{mesa.mestre}</Text>
          </Body>
        </Left>
      </CardItem>
    </Card>
  ));

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  logOut = async () => {
    await AsyncStorage.clear();
    const userToken = AsyncStorage.getItem("userToken");
    console.log(firebase.auth().signOut());
  };

  navegacao = () => {
    this.logOut();
    this.props.navigation.navigate("Login");
  };

  render() {
    return (
      <Container>
        <Header
          androidStatusBarColor="#ffc107"
          style={Style.HeaderStyle}
          hasTabs
        >
          <Left>
            <Icon type="FontAwesome5" name="dice-d20"></Icon>
          </Left>
          <Body>
            <Title style={{ color: "#292b2c", fontSize: 25 }}>DreaMakers</Title>
          </Body>
        </Header>
        <View style={Style.MainView}>
          <Tabs>
            <Tab
              heading={
                <TabHeading style={Style.TabHeadingStyle}>
                  <Icon type="FontAwesome" name="home"></Icon>
                </TabHeading>
              }
            >
              <Index ListaDeMesas={data} />
            </Tab>
            <Tab
              heading={
                <TabHeading style={Style.TabHeadingStyle}>
                  <Icon type="MaterialCommunityIcons" name="sword-cross"></Icon>
                </TabHeading>
              }
            ></Tab>
            <Tab
              heading={
                <TabHeading style={Style.TabHeadingStyle}>
                  <Icon type="FontAwesome" name="cog"></Icon>
                </TabHeading>
              }
            ></Tab>
          </Tabs>
        </View>
      </Container>
    );
  }
}

const Style = StyleSheet.create({
  MainView: {
    flex: 1
  },
  HeaderStyle: {
    backgroundColor: "#ffc107"
    // width: "100%"
  },
  BodyStyle: {
    backgroundColor: "#292b2c",
    width: "100%"
  },
  TabHeadingStyle: {
    backgroundColor: "#292b2c"
  }
});
