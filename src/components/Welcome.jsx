import styled from 'styled-components'

import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { updateUserProfile } from '../services/user.service'

const EditButton = styled.button`
  border-radius: 5px;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  font-weight: bold;
  padding: 10px;
  cursor: pointer;
`
const SubmitButton = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
`

const CancelButton = styled(SubmitButton)`
  background-color: red;
  border-color: red;
`

const WelcomeMessage = styled.div`
  margin-bottom: 2rem;
  color: #fff;
`

const EditContainer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
const Input = styled.input`
  border-radius: 5px;
  padding: 8px;
  margin-top: 0rem;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
`
const ContainerButtons = styled.div`
  display: flex;
  gap: 0.75rem;
`

const LabelCustom = styled.label`
  color: white;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
`

function Welcome({ firstName, lastName }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedFirstName, setEditedFirstName] = useState(firstName)
  const [editedLastName, setEditedLastName] = useState(lastName)

  const { token } = useSelector((state) => state.auth)

  const handleSave = () => {
    updateUserProfile(editedFirstName, editedLastName, token)
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        // Traitez l'erreur ici
        console.error(error)
      })

    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
  }

  return (
    <Container>
      {isEditing ? (
        <EditContainer>
          <LabelCustom>First name</LabelCustom>
          <Input
            type="text"
            value={editedFirstName}
            onChange={(e) => setEditedFirstName(e.target.value)}
          />
          <LabelCustom>Last name</LabelCustom>
          <Input
            type="text"
            value={editedLastName}
            onChange={(e) => setEditedLastName(e.target.value)}
          />
          <ContainerButtons>
            <CancelButton onClick={handleCancel}>Cancel</CancelButton>
            <SubmitButton onClick={handleSave}>Save</SubmitButton>
          </ContainerButtons>
        </EditContainer>
      ) : (
        <WelcomeMessage>
          <h1>
            Welcome back
            <br />
            {editedFirstName} {editedLastName}!
          </h1>
          <EditButton onClick={() => setIsEditing(true)}>Edit Name</EditButton>
        </WelcomeMessage>
      )}
    </Container>
  )
}

export default Welcome
