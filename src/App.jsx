
import './App.css'
import FormsignUp from './components/FormSignUp'
import { Container } from '@mui/material'
import Typography from '@mui/material/Typography'

function App() {

  const handleSubmit = (valores) => {
    console.log("appjs:", valores)
  }

  return (
    <Container component="section" maxWidth="sm" >
    <Typography variant='h3'align='center' component='h1'>Formulario de Registro</Typography>
      <FormsignUp handleSubmit={handleSubmit} />
    </Container>
  )
}

export default App
