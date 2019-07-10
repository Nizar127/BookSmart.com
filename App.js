// product_view.js
// import React, { Component } from 'react';
// import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

// export default class App extends Component {
//   render() {
//     return (
//       <Container>
//         <Header />
//         <Content>
//           <List>
//             <ListItem thumbnail>
//               <Left>
//                 <Thumbnail square source={ require('./img/lucy_pinder2.jpg')} />
//               </Left>
//               <Body>
//                 <Text>Fakhrul</Text>
//                 <Text note numberOfLines={1}>Love Milf</Text>
//               </Body>
//               <Right>
//                 <Button rounded success>
//                   <Text>Book Now</Text>
//                 </Button>
//               </Right>
//             </ListItem>
//           </List>
//           <List>
//             <ListItem thumbnail>
//               <Left>
//                 <Thumbnail square source={ require('./img/lucy_pinder2.jpg')} />
//               </Left>
//               <Body>
//                 <Text>Fakhrul</Text>
//                 <Text note numberOfLines={1}>Love Milf</Text>
                
//               </Body>
//               <Right>
//                 <Button rounded success>
//                   <Text>Book Now</Text>
//                 </Button>
//               </Right>
//             </ListItem>
//           </List>
          
//         </Content>
//       </Container>
//     );
//   }
// }

//for booking.js
// import React, { Component } from 'react';
// import { Container, Header, Body, Content, ListItem, Form, Text,Item, Radio, Icon,Card, CardItem, Left,  Input, Thumbnail, Label, Right, Picker, View, Button } from 'native-base';
// export default class FixedLabelExample extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { chosenDate: new Date() };
  //   this.setDate = this.setDate.bind(this);
  // }
  // setDate(newDate) {
  //   this.setState({ chosenDate: newDate });
  // }

//   render() {
//     return (
//       <Container>
//         <Header />
       
//         <Content>
//      <View style={{margin: 30,flexDirection: 'row'}}>
//            <Left>
//                  <Thumbnail large source={require("./img/lucy_pinder.jpg")} />
//             </Left>

//                  <Right>
//                  <Body style={{marginRight: 50}}>
//                    <Text>Name:</Text>
//                    <Text>Email:</Text>
//                    <Text>Price:</Text>
//                  </Body>
//                  </Right>
              
              
        
//       </View>
//       <View></View>
//       <View>
//         <Text>Dates:</Text>
//       </View>
//       <View><Right></Right></View>
//       <Right>
//  
//          <Content>
// <DatePicker
// defaultDate={new Date(2018, 4, 4)}
// minimumDate={new Date(2018, 1, 1)}
// maximumDate={new Date(2018, 12, 31)}
// locale={"en"}
// timeZoneOffsetInMinutes={undefined}
// modalTransparent={false}
// animationType={"fade"}
// androidMode={"default"}
// placeHolderText="Select date"
// textStyle={{ color: "green" }}
// placeHolderTextStyle={{ color: "#d3d3d3" }}
// onDateChange={this.setDate}
// disabled={false}
// />
// <Text>
//   Date: {this.state.chosenDate.toString().substr(4, 12)}
// </Text>
// </Content>
//           <Item fixedLabel>
//               <Label>Number of People </Label>
//               <Input />
//             </Item>
//           </Form>
//           </Right>
//           </Content>
//           </Container>
//    <Container>
//          <Content>
//            <Header/>
          
//             <Text>Payment</Text>
         

     
//           <ListItem>
//             <Left>
//               <Text>Debit Card</Text>
//             </Left>
//             <Right>
//               <Radio selected={false} />
//             </Right>
//           </ListItem>
//           <ListItem>
//             <Left>
//               <Text>Debit Card</Text>
//             </Left>
//             <Right>
//               <Radio selected={false} />
//             </Right>
//           </ListItem>
//           <ListItem>
//             <Left>
//               <Text>Credit Card</Text>
//             </Left>
//             <Right>
//               <Radio selected={false} />
//             </Right>
//           </ListItem>
//           <ListItem>
//             <Left>
//               <Text>Online Banking</Text>
//             </Left>
//             <Right>
//               <Radio selected={false} />
//             </Right>
//           </ListItem>
//           <ListItem>
//             <Left>
//               <Text>Cash</Text>
//             </Left>
//             <Right>
//               <Radio selected={false} />
//             </Right>
//           </ListItem>
//         </Content>
//      </Container>
//           <View>
//           <Button success>
//             <Text>BOOK NOW</Text>
//           </Button>
//           </View>
 
//     );
//   }
// }

// import React, { Component } from 'react';
// import { Container, Header, Content, ListItem, Text, Radio, Right, Left, View } from 'native-base';
// export default class RadioButtonExample extends Component {
//   render() {
//     return (
//       <Container>
//         <Header/>
//         <Content>
//           <View><Text>Payment</Text></View>
//           <ListItem>
//             <Left>
//               <Text>Daily Stand Up</Text>
//             </Left>
//             <Right>
//               <Radio selected={false} />
//             </Right>
//           </ListItem>
//           <ListItem>
//             <Left>
//               <Text>Discussion with Client</Text>
//             </Left>
//             <Right>
//               <Radio selected={true} />
//             </Right>
//           </ListItem>
//         </Content>
//       </Container>
//     );
//   }
// }


//profile.js
// import React, { Component } from 'react';
// import { Container, Header, Content, Tab, Tabs } from 'native-base';
// import Tab1 from './Screens/profile/tab/CheckIn';
// import Tab2 from './Screens/profile/tab/k';
// import Tab3 from './Screens/profile/tab/ok';
// export default class TabsExample extends Component {
//   render() {
//     return (
//       <Container>
//         <Header hasTabs />
//         <Content>
//         <Tabs>
//           <Tab heading="Check-In">
//             <Tab1 />
//           </Tab>
//           <Tab heading="Incoming Bookind">
//             <Tab2 />
//           </Tab>
//           <Tab heading="View Feed">
//             <Tab3 />
//           </Tab>
//         </Tabs>
//         </Content>
//       </Container>
//     );
//   }
// }

//for explore
// import React, { Component } from 'react';
// import { Container, Content, Card, CardItem, Header, Body, Left, Right, Item, Input, Icon, Button, Text, View, Thumbnail } from 'native-base';
// import { ScrollView } from 'react-native-gesture-handler';

// export default class SearchBarExample extends Component {
//   render() {
//     return (
//       <Container>
//        <ScrollView>
//         <Header searchBar rounded>
//           <Item style={{marginTop:70, borderBottomColor: 'red'}}>
//             <Icon name="ios-search" />
//             <Input placeholder="Search"/>
//             <Icon name="ios-people" />
//           </Item>
//           <Button transparent>
//             <Text>Search</Text>
//           </Button>
//         </Header>

//         <View style={{marginTop: 60, marginBottom: 40, justifyContent: 'center', alignItems: 'center'}}>
//           <Text>Categories</Text>
//           </View>
//           <Container style={{flex: 1, flexDirection: 'row', justifyContent:'space-between', alignSelf:'flex-end'}}>
//         <Content padder style={{padding: 6}}>
//           <Card style={{width: 150, maxHeight: 280}}>
//             <CardItem header bordered >
//               <Text style={{marginLeft: 30, alignItems: 'center'}}>Analytics</Text>
//             </CardItem>
//             <CardItem style={{alignItems: 'center'}}>
//               <Thumbnail square style={{marginLeft: 10, width:100, maxHeight: 200, marginTop: 10}} source={require('./img/monica.jpg')}/>
//             </CardItem>
//             <View style={{alignItems: 'center', justifyContent: 'center'}}>
//               <Button primary style={{marginTop: 20, marginBottom:20, marginLeft: 50}}><Text>View</Text></Button>
//             </View>
//           </Card>

//         </Content>
//         <Content padder style={{padding: 6}}>
//           <Card style={{width: 150, maxHeight: 280}}>
//             <CardItem header bordered >
//               <Text style={{marginLeft: 30, alignItems: 'center'}}>Analytics</Text>
//             </CardItem>
//             <CardItem style={{alignItems: 'center'}}>
//               <Thumbnail square style={{marginLeft: 10, width:100, maxHeight: 200, marginTop: 10}} source={require('./img/monica.jpg')}/>
//             </CardItem>
//             <View style={{alignItems: 'center', justifyContent: 'center'}}>
//               <Button primary style={{marginTop: 20, marginBottom:20, marginLeft: 50}}><Text>View</Text></Button>
//             </View>
//           </Card>

//         </Content>

//         </Container>
//         </ScrollView>
//       </Container>
//     );
//   }
// }

//for check in
import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Header, Body, Left, Right, Item, Input, Icon, Button, Text, View, Thumbnail } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

export default class SearchBarExample extends Component {
  render() {
    return (
      <Container>
       <ScrollView>
        <Header searchBar rounded>
          <Item style={{marginTop:70, borderBottomColor: 'red'}}>
            <Icon name="ios-search" />
            <Input placeholder="Search"/>
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>

        <View style={{marginTop: 60, marginBottom: 40, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Check In</Text>
          </View>
          <View style={{marginTop: 20, marginBottom: 30}}>
            <Text>Within 3 Days</Text>
          </View>
          <Container style={{flex: 1, flexDirection: 'row', justifyContent:'space-between', alignSelf:'flex-end'}}>
        <Content padder style={{padding: 6}}>
          <Card style={{width: 150, maxHeight: 280}}>
            <CardItem header bordered >
              <Text style={{marginLeft: 30, alignItems: 'center'}}>Drone Rental</Text>
            </CardItem>
            <CardItem style={{alignItems: 'center'}}>
              <Thumbnail square style={{marginLeft: 10, width:100, maxHeight: 200, marginTop: 10}} source={require('./img/monica.jpg')}/>
            </CardItem>
            <View>
              
            </View>
            <View></View>
            <View style={{flexDirection:'row', marginLeft: 80,alignContent:'flex-end'}}>
              <Text note>1/1/2020</Text>
              </View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Button success style={{marginTop: 20, marginBottom:20, marginLeft: 50}}><Text>View</Text></Button>
            </View>
          </Card>

        </Content>
        <Content padder style={{padding: 6}}>
          <Card style={{width: 150, maxHeight: 280}}>
            <CardItem header bordered >
              <Text style={{marginLeft: 30, alignItems: 'center'}}>Analytics</Text>
            </CardItem>
            <CardItem style={{alignItems: 'center'}}>
              <Thumbnail square style={{marginLeft: 10, width:100, maxHeight: 200, marginTop: 10}} source={require('./img/monica.jpg')}/>
            </CardItem>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Button success style={{marginTop: 20, marginBottom:20, marginLeft: 50}}><Text>View</Text></Button>
            </View>
          </Card>

        </Content>

        </Container>
        </ScrollView>
      </Container>
    );
  }
}

//for product_detail
// import React, { Component } from 'react';
// import { Image } from 'react-native';
// import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Right, Body } from 'native-base';
// import { ScrollView } from 'react-native-gesture-handler';
// export default class CardShowcaseExample extends Component {
//   render() {
//     return (
      
//       <Container>
//         <ScrollView>
//         <Header />
//         <Content>
//           <Card style={{flex: 0}}>
//             <CardItem>
//               <Left>
//                 <Thumbnail source={require("./img/lucy_pinder.jpg")} />
//                 <Body>
//                   <Text>Fakhrul</Text>
//                   <Text note>April 15, 2016</Text>
                  
//                 </Body>
//               </Left>
              
//             </CardItem>

//             <CardItem style={{margin: 30}}>
//               <Left>
//                   <Button rounded success><Text>Book Now</Text></Button>
//                   </Left>
//                   <Right>
//                     <Button rounded primary><Text>Add To Wishlist</Text></Button>
//                   </Right>
//                   </CardItem>
//             <CardItem style={{marginLeft: 30, marginRight: 30,justifyContent: 'center'}}>
//               <Body>
//                 <Image source={require("./img/monica.jpg")} style={{alignItems: 'stretch',height: 200, width: 200, flex: 1}}/>
//                 <Text>
//                   //Your text here
//                 </Text>
//               </Body>
//             </CardItem>
//             <CardItem>
//               <Left>
//                 <Button transparent>
//                   <Icon active name="thumbs-up" />
//                   <Text>12 Likes</Text>
//                 </Button>
//               </Left>
//               <Body>
//                 <Button transparent>
//                   <Icon active name="chatbubbles" />
//                   <Text>4 Comments</Text>
//                 </Button>
//               </Body>
//               <Right>
//                 <Text>11h ago</Text>
//               </Right>
//             </CardItem>
//           </Card>
//         </Content>
//         <Content>
//           <Card style={{flex: 0}}>
//             <CardItem>
//               <Left>
//                 <Thumbnail source={require("./img/lucy_pinder.jpg")} />
//                 <Body>
//                   <Text>Fakhrul</Text>
//                   <Text note>April 15, 2016</Text>
                  
//                 </Body>
//               </Left>
              
//             </CardItem>

//             <CardItem style={{margin: 30}}>
//               <Left>
//                   <Button rounded success><Text>Book Now</Text></Button>
//                   </Left>
//                   <Right>
//                     <Button rounded primary><Text>Add To Wishlist</Text></Button>
//                   </Right>
//                   </CardItem>
//             <CardItem style={{marginLeft: 30, marginRight: 30,justifyContent: 'center'}}>
//               <Body>
//                 <Image source={require("./img/monica.jpg")} style={{alignItems: 'stretch',height: 200, width: 200, flex: 1}}/>
//                 <Text>
//                   //Your text here
//                 </Text>
//               </Body>
//             </CardItem>
//             <CardItem>
//               <Left>
//                 <Button transparent>
//                   <Icon active name="thumbs-up" />
//                   <Text>12 Likes</Text>
//                 </Button>
//               </Left>
//               <Body>
//                 <Button transparent>
//                   <Icon active name="chatbubbles" />
//                   <Text>4 Comments</Text>
//                 </Button>
//               </Body>
//               <Right>
//                 <Text>11h ago</Text>
//               </Right>
//             </CardItem>
//           </Card>
//         </Content>
//         </ScrollView>
//       </Container>
    
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });




// import React, { Component } from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import Feed from './Screens/Feed';
// import Explore from './Screens/Explore';
// import Trips from './Screens/Trips';
// import Inbox from './Screens/Inbox';
// import Settings from './Screens/Settings';
// /**
//  * - AppSwitchNavigator
//  *    - WelcomeScreen
//  *      - Login Button
//  *      - Sign Up Button
//  *    - AppDrawerNavigator
//  *          - Dashboard - DashboardStackNavigator(needed for header and to change the header based on the                     tab)
//  *            - DashboardTabNavigator
//  *              - Tab 1 - FeedStack
//  *              - Tab 2 - ProfileStack
//  *              - Tab 3 - SettingsStack
//  *            - Any files you don't want to be a part of the Tab Navigator can go here.
//  */

// import {
//   createSwitchNavigator,
//   createAppContainer,
//   createDrawerNavigator,
//   createBottomTabNavigator,
//   createStackNavigator
// } from 'react-navigation';
// class App extends Component {
//   render() {
//     return <AppContainer />;
//   }
// }


// class WelcomeScreen extends Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Button
//           title="Login"
//           onPress={() => this.props.navigation.navigate('Dashboard')}
//         />
//         <Button title="Sign Up" onPress={() => alert('button pressed')} />
//       </View>
//     );
//   }
// }

// class DashboardScreen extends Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>DashboardScreen</Text>
//       </View>
//     );
//   }
// }

// export default App;

// // class Feed extends Component {
// //   render() {
// //     return (
// //       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //         <Text>Feed</Text>
        
// //       </View>
// //     );
// //   }
// // }

// // class Inbox extends Component {
// //   render() {
// //     return (
// //       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //         <Text>Settings</Text>
// //       </View>
// //     );
// //   }
// // }

// // class Explore extends Component {
// //   render() {
// //     return (
// //       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //         <Text>Profile</Text>
// //       </View>
// //     );
// //   }
// // }

// const DashboardTabNavigator = createBottomTabNavigator(
//   {
//     Feed,
//     Explore,
//     Inbox,
//     Trips,
//     Settings
//   },
//   {
//     navigationOptions: ({ navigation }) => {
//       const { routeName } = navigation.state.routes[navigation.state.index];
//       return {
//         headerTitle: routeName,
//         headerTitleStyle: {fontSize: 20}
//       };
//     }
//   }
// );
// const DashboardStackNavigator = createStackNavigator(
//   {
//     DashboardTabNavigator: DashboardTabNavigator
//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => {
//       return {
//         headerLeft: (
//           <Icon
//             style={{ paddingLeft: 10 }}
//             onPress={() => navigation.openDrawer()}
//             name="md-menu"
//             size={30}
//           />
//         )
//       };
//     }
//   }
// );

// const AppDrawerNavigator = createDrawerNavigator({
//   Dashboard: {
//     screen: DashboardStackNavigator
//   }
// });

// const AppSwitchNavigator = createSwitchNavigator({
//   Welcome: { screen: WelcomeScreen },
//   Dashboard: { screen: AppDrawerNavigator }
// });

// const AppContainer = createAppContainer(AppSwitchNavigator);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// });