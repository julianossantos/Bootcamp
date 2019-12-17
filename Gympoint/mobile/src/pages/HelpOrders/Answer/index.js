/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Header from '~/components/Header';
import {
  Container,
  Content,
  Left,
  Title,
  Question,
  AnswerQuestion,
  Time,
} from './styles';

export default function Answer({ navigation }) {
  const { question, answer, created_at } = navigation.getParam('data');

  const dateParsed = useMemo(() => {
    return formatDistance(parseISO(created_at), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [created_at]);

  return (
    <Container>
      <Content>
        <Left>
          <Title>Pergunta</Title>
          <Time>{dateParsed}</Time>
        </Left>
        <Question>{question}</Question>
        <Left>
          <Title>Resposta</Title>
        </Left>
        <AnswerQuestion>{answer}</AnswerQuestion>
      </Content>
    </Container>
  );
}

Answer.navigationOptions = ({ navigation }) => ({
  headerTitle: () => <Header />,
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="chevron-left" size={20} color="#aaa" />
    </TouchableOpacity>
  ),
});
