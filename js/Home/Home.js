import {
  View,
  StyleSheet,
  AsyncStorage,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";
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
  Thumbnail,
  Content,
  Button,
  Right
} from "native-base";

const data = [
  {
    id: "00",
    name: "Wolrd of Warcraft",
    mestre: "Felipe",
    img_mestre: require("../../img/pp.jpeg"),
    img_mesa: require("../../img/wow.jpg")
  },
  {
    id: "01",
    name: "Star Craft",
    mestre: "Felipe",
    img_mestre: require("../../img/pp.jpeg"),
    img_mesa: require("../../img/sc2.jpg")
  },
  {
    id: "03",
    name: "The Elder Scrolls Online",
    mestre: "Laura",
    img_mestre: require("../../img/Laura.jpeg"),
    img_mesa: require("../../img/skyrim.jpg")
  }
];

const Index = ({ ListaDeMesas }) => (
  <Content>
    {ListaDeMesas.map(mesa => (
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
        <CardItem cardBody>
          <Image
            source={mesa.img_mesa}
            style={{ height: 200, width: null, flex: 1 }}
          ></Image>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up">
                <Text>Teste</Text>
              </Icon>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon active name="chatbubbles">
                <Text>Teste</Text>
              </Icon>
            </Button>
          </Body>
          <Right>
            <Text note>7:40</Text>
          </Right>
        </CardItem>
      </Card>
    ))}
  </Content>
);

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
            >
              <Button
                onPress={() => this.navegacao()}
                style={{
                  width: "40%",
                  alignSelf: "center"
                }}
                icon
                danger
              >
                <Icon type="FontAwesome5" name="sign-out-alt" />
                <Text>SignOut</Text>
              </Button>
            </Tab>
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
