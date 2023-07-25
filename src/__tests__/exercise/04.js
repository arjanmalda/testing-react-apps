// form testing
// http://localhost:3000/login

import * as React from 'react'
import {fireEvent, render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'

test('submitting the form calls onSubmit with username and password', async () => {
  // 🐨 create a variable called "submittedData" and a handleSubmit function that
  // accepts the data and assigns submittedData to the data that was submitted

  let submittedData

  const handleSubmit = data => (submittedData = data)

  //
  // 🐨 render the login with your handleSubmit function as the onSubmit prop

  render(<Login onSubmit={handleSubmit} />)

  const username = screen.getByLabelText(/username/i)
  const password = screen.getByLabelText(/password/i)
  const button = screen.getByRole('button')

  screen.debug()

  await userEvent.type(username, 'Arjan')
  await userEvent.type(password, '123456')

  fireEvent.click(button)

  expect(submittedData).toEqual({
    username: 'Arjan',
    password: '123456',
  })
  // assert that submittedData is correct
  // 💰 use `toEqual` from Jest: 📜 https://jestjs.io/docs/en/expect#toequalvalue
})

/*
eslint
  no-unused-vars: "off",
*/
