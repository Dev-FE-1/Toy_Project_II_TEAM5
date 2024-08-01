import useUser from '@hooks/useUser'
import addCommute from '@mock/addCommute'
import { addEmployee } from '@mock/addEmployee'
import { addProfile } from '@mock/addProfile'
import fetchCommutesByMonth from '@mock/fetchCommute'
import { fetchEmployee } from '@mock/fetchEmployee'
import styled from 'styled-components'
import Login from './login'
function AdminPage() {
  const user = useUser()
  console.log('user', user)

  return (
    <Container>
      <Field label="EMPLOYEE">
        <Button onClick={addEmployee}>mock</Button>
        <Button
          onClick={() => {
            addProfile(user.uid)
          }}
        >
          profile
        </Button>
        <Button onClick={fetchEmployee}>fetch</Button>
      </Field>

      <Field label="COMMUTE">
        <Button
          onClick={() => {
            addCommute(user.uid)
          }}
        >
          mock
        </Button>
        <Button
          onClick={() => {
            fetchCommutesByMonth(user.uid, 2024, 1)
          }}
        >
          fetch
        </Button>
      </Field>
      <Login />
    </Container>
  )
}

const Container = styled.div`
  background-image: url('https://thumbs.dreamstime.com/z/classified-square-grunge-stamp-classified-sign-classified-classified-stamp-124938799.jpg?w=360 360w, https://thumbs.dreamstime.com/z/classified-square-grunge-stamp-classified-sign-classified-classified-stamp-124938799.jpg?w=400 400w, https://thumbs.dreamstime.com/z/classified-square-grunge-stamp-classified-sign-classified-classified-stamp-124938799.jpg?w=450 450w, https://thumbs.dreamstime.com/z/classified-square-grunge-stamp-classified-sign-classified-classified-stamp-124938799.jpg?w=576 576w, https://thumbs.dreamstime.com/z/classified-square-grunge-stamp-classified-sign-classified-classified-stamp-124938799.jpg?w=768 768w, https://thumbs.dreamstime.com/z/classified-square-grunge-stamp-classified-sign-classified-classified-stamp-124938799.jpg?w=992 992w');
  height: 100%;
  border: 10px dashed;
  padding: 20px;
`

function Field({ label, children }) {
  return (
    <Border>
      <Label>{label}</Label>
      {children}
    </Border>
  )
}

const Border = styled.fieldset`
  width: 600px;
  margin: 20px 0;
  background-color: #000;
`

const Label = styled.legend`
  background-color: #000;
  color: #fff;
  padding: 3px 6px;
`

const Button = styled.button`
  width: 94px;
  height: 32px;
  box-sizing: border-box;
  margin: 20px;
  margin-left: 40px;
  padding: 6px 8px;
  background-color: #000;
  color: #000;
  border: 1px solid #444;

  &:hover {
    color: white;
  }
`

export default AdminPage
