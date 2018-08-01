/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import styled from 'styled-components';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.Component {
  render() {
    return (
      <Form>
        <Title>Input A Word:</Title>
        <br />
        <InputText type="text" placeholder="Please input a single word" />
        <br />
        <SubmitButton type="submit" value="Submit" />
      </Form>
    );
  }
}

const Form = styled.div`
  margin-left: 20px;
`;

const Title = styled.h2`
  font-size: 1.5em;
  color: palevioletred;
`;

const InputText = styled.input`
  border: 1px solid;
  width: 400px;
  margin-bottom: 10px;
`;

const SubmitButton = styled.input`
  background-color: grey;
  color: white;
`;
