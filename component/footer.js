import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
export default class FooterTabsIconTextExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="search" />
              <Text>Explore</Text>
            </Button>
            <Button vertical>
              <Icon name="mail" />
              <Text>Notifications</Text>
            </Button>
            <Button vertical active>
              <Icon active name="heart" />
              <Text>Wishlist</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}Copy
