/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Question,
  Left,
  AwseredIcon,
  Awsered,
  Time,
  Message,
} from './styles';

function ListHelpOrders({ data, navigation }) {
  const { created_at, answer, question } = data;

  const dateParsed = useMemo(() => {
    return formatDistance(parseISO(created_at), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [created_at]);

  return (
    <Container>
      <Question>
        <Left>
          {answer !== null ? (
            <AwseredIcon>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Answer', { data });
                }}
              >
                <Icon name="check-circle" size={20} color="#00FF00" />
              </TouchableOpacity>
            </AwseredIcon>
          ) : (
            <AwseredIcon>
              <Icon name="check-circle" size={20} color="#aaa" />
            </AwseredIcon>
          )}
          <Awsered answer={answer}>
            {answer !== null ? 'Respondido' : 'Sem Resposta'}
          </Awsered>
          <Time>{dateParsed}</Time>
        </Left>
        <Message>{question}</Message>
      </Question>
    </Container>
  );
}

export default withNavigation(ListHelpOrders);
