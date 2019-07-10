
import React, { Component } from 'react';import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

export default class Tab2 extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
          <ListItem thumbnail>
              <Left>
                <Thumbnail square source={ require('../../../img/monica.jpg')} />
              </Left>
              <Body>
                <Text>Fakhrul</Text>
                <Text note numberOfLines={1}>Love Milf</Text>
              </Body>
              <Right>
                <Button rounded success>
                  <Text>Book Now</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
          <List>
          <ListItem thumbnail>
              <Left>
                <Thumbnail square source={ require('../../../img/monica.jpg')} />
              </Left>
              <Body>
                <Text>Fakhrul</Text>
                <Text note numberOfLines={1}>Love Milf</Text>
                
              </Body>
              <Right>
                <Button rounded success>
                  <Text>Book Now</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
          
        </Content>
      </Container>
    );
  }
}
