
import './App.css'
import FormsignUp from './components/FormSignUp'
import { Container } from '@mui/material'
import Typography from '@mui/material/Typography'

function App() {

  return (
    <Container component="section" maxWidth="sm" >
    <Typography variant='h3'align='center' component='h1'>Formulario de Registro</Typography>
      <FormsignUp />
    </Container>
  )
}

export default App
