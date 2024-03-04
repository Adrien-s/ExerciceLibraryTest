import React from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../app'
/*
test('Premier scénario : cas passant', async () => {
  render(<App />)

  expect(screen.getByText('Welcome home')).toBeInTheDocument()

  userEvent.click(screen.getByText('Fill out the form'))
  expect(screen.getByText(/page 1/i)).toBeInTheDocument()

  expect(screen.getByText(/go home/i)).toBeInTheDocument()

  //8 - Un champ avec le label "Favorite food" est dans le document
  expect(screen.getByLabelText(/Favorite food/i)).toBeInTheDocument()

  //9 - l'utilisateur rempli le champ avec "Les pâtes"
  userEvent.type(screen.getByLabelText(/Favorite food/i), 'Les pâtes')

  // 10 - un lien "Next" est dans le document
  expect(screen.getByText(/Next/i)).toBeInTheDocument()

  //11 - l'utilisateur clique sur le lien "Next"
  userEvent.click(screen.getByText('Next'))

  //13 - Un titre "Page 2" est dans le document
  expect(screen.getByText(/Page 2/i)).toBeInTheDocument()

  //14 - un lien "Go back" est dans le document
  expect(screen.getByText(/Go back/i)).toBeInTheDocument()

  //15 - Un champ avec le label "Favorite drink" est dans le document
  expect(screen.getByLabelText(/Favorite drink/i)).toBeInTheDocument()

  //16 - l'utilisateur rempli le champ avec "Bière"
  userEvent.type(screen.getByLabelText(/Favorite drink/i), 'Bière')

  //17 - un lien "Review" est dans document
  expect(screen.getByText(/Review/i)).toBeInTheDocument()

  //18 - l'utilisateur clique sur le lien "Review"
  userEvent.click(screen.getByText('Review'))

  //20 - Un titre "Confirm" est dans le document
  expect(screen.getByRole('heading')).toHaveTextContent(/Confirm/i)

  //Un texte "Please confirm your choices" est dans le document
  expect(screen.getByText(/Please confirm your choices/i)).toBeInTheDocument()

  //22 - Un texte label "favorite food" a pour contenu "Les pâtes"
  expect(screen.getByLabelText(/favorite food/i)).toHaveTextContent(
    /Les pâtes/i,
  )

  //23 - Un texte label "favorite drink" a pour contenu "Bière"
  expect(screen.getByLabelText(/favorite drink/i)).toHaveTextContent(/Bière/i)

  //24 - un lien "Go back" est dans le document
  expect(screen.getByText(/Go back/i)).toBeInTheDocument()

  //25 - un bouton "Confirm" est dans le document
  expect(screen.getByRole('button')).toHaveTextContent(/Confirm/i)

  //26 - l'utilisateur clique sur le bouton "Confirm"
  //27 - l'utilisateur est redirigé sur la page de Félicitation
  //28 - Un titre "Congrats.You did it." est dans le document
  userEvent.click(screen.getByRole('button', {name: 'Confirm'}))
  await waitFor(() =>
    expect(screen.getByRole('heading')).toHaveTextContent(
      /Congrats.You did it./i,
    ),
  )

  expect(screen.getByText(/go home/i)).toBeInTheDocument()
  userEvent.click(screen.getByRole('button', {name: /go home/i}))
  expect(screen.getByRole('heading')).toHaveTextContent(/Welcome home/i)

  // screen.debug()
})
*/

test('Second scénario : cas non passant', async () => {
  render(<App />)
  //2 - Un titre "Welcome home" est dans le document
  expect(screen.getByRole('heading')).toHaveTextContent(/Welcome home/i)
  userEvent.click(screen.getByText('Fill out the form'))
  expect(screen.getByText(/page 1/i)).toBeInTheDocument()

  expect(screen.getByText(/go home/i)).toBeInTheDocument()

  //8 - Un champ avec le label "Favorite food" est dans le document
  expect(screen.getByLabelText(/Favorite food/i)).toBeInTheDocument()

  //9 - l'utilisateur rempli le champ avec ""
  userEvent.type(screen.getByLabelText(/Favorite food/i), '')

  // 10 - un lien "Next" est dans le document
  expect(screen.getByText(/Next/i)).toBeInTheDocument()

  //11 - l'utilisateur clique sur le lien "Next"
  userEvent.click(screen.getByText('Next'))

  //13 - Un titre "Page 2" est dans le document
  expect(screen.getByText(/Page 2/i)).toBeInTheDocument()

  //14 - un lien "Go back" est dans le document
  expect(screen.getByText(/Go back/i)).toBeInTheDocument()

  //15 - Un champ avec le label "Favorite drink" est dans le document
  expect(screen.getByLabelText(/Favorite drink/i)).toBeInTheDocument()

  //16 - l'utilisateur rempli le champ avec "Bière"
  userEvent.type(screen.getByLabelText(/Favorite drink/i), 'Bière')

  //17 - un lien "Review" est dans document
  expect(screen.getByText(/Review/i)).toBeInTheDocument()

  //18 - l'utilisateur clique sur le lien "Review"
  userEvent.click(screen.getByText('Review'))

  //20 - Un titre "Confirm" est dans le document
  expect(screen.getByRole('heading')).toHaveTextContent(/Confirm/i)

  //Un texte "Please confirm your choices" est dans le document
  expect(screen.getByText(/Please confirm your choices/i)).toBeInTheDocument()

  //22 - Un texte label "favorite food" a pour contenu ""
  expect(screen.getByLabelText(/favorite food/i)).toHaveTextContent('')

  //23 - Un texte label "favorite drink" a pour contenu "Bière"
  expect(screen.getByLabelText(/favorite drink/i)).toHaveTextContent(/Bière/i)

  //24 - un lien "Go back" est dans le document
  expect(screen.getByText(/Go back/i)).toBeInTheDocument()

  //25 - un bouton "Confirm" est dans le document
  expect(screen.getByRole('button')).toHaveTextContent(/Confirm/i)

  userEvent.click(screen.getByRole('button', {name: 'Confirm'}))
  //28 - Un texte "Oh no. There was an error." est dans le document
  await waitFor(() =>
    expect(screen.getByText(/Oh no. There was an error./i)).toBeInTheDocument(),
  )
  //Un texte "les champs food et drink sont obligatoires" est dans le document
  expect(
    screen.getByText(/les champs food et drink sont obligatoires/i),
  ).toBeInTheDocument()

  //30 - un lien "Go home" est dans le document
  expect(screen.getByText(/go home/i)).toBeInTheDocument()
  //31 - un lien "Try again" est dans le document
  expect(screen.getByText(/Try again/i)).toBeInTheDocument()
  //32 - l'utilisateur clique sur le lien "Try again"
  userEvent.click(screen.getByText('Try again'))

  //33 - l'utilisateur est redirigé sur la page 1

  //34 - Un titre "Page 1" est dans le document
  expect(screen.getByRole('heading')).toHaveTextContent(/Page 1/i)

  //screen.debug()
})
