import React from 'react';
import { Container, Title } from './styles';
import { Image } from 'react-native';
import logoImg from '../../assets/logo.png';

const SignIn: React.FC = () => {
  return (
    <Container >
      <Image source={logoImg} />

      <Title>Faça seu login</Title>
    </Container>
  );
};

export default SignIn;
