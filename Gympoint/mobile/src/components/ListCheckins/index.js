/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, Checked, Time } from './styles';

export default function ListCheckins({ data }) {
  const { created_at, id } = data;

  const dateParsed = useMemo(() => {
    return formatDistance(parseISO(created_at), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [created_at]);

  return (
    <Container>
      <Checked>Check-in #{id}</Checked>
      <Time>{dateParsed}</Time>
    </Container>
  );
}
