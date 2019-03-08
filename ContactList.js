import React from 'react';
import {
  Container,
  Header,
  Body,
  Title,
  Content,
  View,
  Text,
  List,
  ListItem,
  Icon,
  Right
} from 'native-base'
import Communications from 'react-native-communications'

const contactList = [
  { name: 'Brock Lesnar' , number: '09157569001' },
  { name: 'John Cena' , number: '09157569001' },
  { name: 'Rey Mysterio' , number: '09157569001' },
  { name: 'Randy Orton' , number: '09157569001' },
  { name: 'Hulk Hogan' , number: '09157569001' },
  { name: 'Dante Gulapa' , number: '09157569001' },
  { name: 'Steve Jobs' , number: '09157569001' },
  { name: 'Bill Gates' , number: '09157569001' },
  { name: 'Tim Apple' , number: '09157569001' },
  { name: 'Edward Kenway' , number: '09157569001' },
  { name: 'Arthur Morgan' , number: '09157569001' },
  { name: 'John Marston' , number: '09157569001' },
  { name: 'Solid Snake' , number: '09157569001' },
  { name: 'Nathan Drake' , number: '09157569001' },
  { name: 'Ezio Auditore' , number: '09157569001' },
  { name: 'Arenea Highwind' , number: '09157569001' },
  { name: 'Noctis Lucis Caelum' , number: '09157569001' },
  { name: 'Max Payne' , number: '09157569001' },
  { name: 'Kratos' , number: '09157569001' },
  { name: 'Cloud Strife' , number: '09157569001' },
  { name: 'Lara Croft' , number: '09157569001' }
]

export default class ContactList extends React.Component {
  renderContactList () {
    return contactList.map((contact, i) => (
      <ListItem key={i} button onPress={() => {Communications.text(contact.number)}}>
        <Body>
          <Text> {contact.name} </Text>
        </Body>
        <Right>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
    ))
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title> Contact App </Title>
          </Body>
        </Header>
        <Content>
          <List>
            {this.renderContactList()}
          </List>
        </Content>
      </Container>
    );
  }
}
