import React from 'react';
import Proptypes from 'prop-types';
import { Image } from 'react-native';
import { useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '~/assets/logo-header.jpeg';
import { signOut } from '~/store/module/auth/actions';
import { Container, HeaderContent, ImageLogo, ButtonSignUp } from './styles';

export default function Header({ logout }) {
  const dispatch = useDispatch();

  function handleSingUp() {
    dispatch(signOut());
  }

  return (
    <Container>
      <HeaderContent>
        <ImageLogo>
          <Image source={logo} />
        </ImageLogo>
        {logout && (
          <ButtonSignUp title="Sair" onPress={handleSingUp}>
            <Icon name="input" size={20} style={{ color: '#ee4d64' }} />
          </ButtonSignUp>
        )}
      </HeaderContent>
    </Container>
  );
}

Header.propTypes = {
  logout: Proptypes.bool,
};

Header.defaultProps = {
  logout: false,
};
