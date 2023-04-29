import { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { Switch } from '@mui/material'
import { FormGroup } from '@mui/material'
import { FormControlLabel } from '@mui/material'

function FormsignUp({ handleSubmit }) {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [prom, setProm] = useState(true)
  const [nov, setNov] = useState(false)

  const [errorsName, setErrorsName] = useState ({
    name: {
      error: false,
      message: 'Deben ser al menos 3 caracteres'
    }
  })

  const [errorsLastName, setErrorsLastName] = useState({
    lastName: {
      error: false,
      message: 'Deben ser al menos 3 caracteres'
    }
  })

  const [errorsEmail, setErrorsEmail] = useState({
    email: {
      error: false,
      message: 'Deben ser al menos 6 caracteres'
    }
  })
  
  //VALIDADORES DE NOMBRE Y APELLIDOS
  function validarNombre(nombre) {
    if (nombre.length >= 3) {
      return { 
        name: {
          error: false, 
          message: '' 
        } 
      }
    } else {
      return { 
        name:{ 
          error: true,
          message: 'Deben ser al menos 3 caracteres' 
        }
      }
    }
  }

  function validarApellido(apellido) {
    if (apellido.length >= 3) {
      return { 
        lastName: {
          error: false, 
          message: '' 
        } 
      }
    } else {
      return { 
        lastName:{ 
          error: true,
          message: 'Deben ser al menos 3 caracteres' 
        }
      }
    }
  }

    //VALIDADOR DE EMAIL
    function validarEmail(email) {
      if (email.length >= 6) {
        return {
          email: {
            error: false,
            message: ''
          }
        }
      } else {
        return {
          email: {
            error: true,
            message: 'Deben ser al menos 6 caracteres'
          }
        }
      }
    }

  return <form onSubmit={ (e) => {
    e.preventDefault()
    handleSubmit({name, lastName, email, prom, nov})
  }} >

    <TextField
      id='name'
      label='Nombre'
      variant='outlined'
      fullWidth
      margin='normal'
      onChange={ (e) => {
        setName(e.target.value)
      }}
      value={ name }
      error={ errorsName.name.error }
      helperText={ errorsName.name.error ? errorsName.name.message : ''}
      onBlur={ (e) => {
        setErrorsName(validarNombre(e.target.value))
      }}
    />
    <TextField
      id='lastName'
      label='Apellidos'
      variant='outlined' 
      fullWidth
      margin='normal'
      onChange={ (e) =>{
        setLastName(e.target.value)
      }}
      value={ lastName }
      error={ errorsLastName.lastName.error }
      helperText={ errorsLastName.lastName.error ? errorsLastName.lastName.message : ''}
      onBlur={ (e) => {
        setErrorsLastName(validarApellido(e.target.value))
      }}
    />
    <TextField
      id='email'
      label='Email'
      variant='outlined'
      fullWidth
      margin='normal'
      onChange={ (e) => {
        setEmail(e.target.value)
      }}
      value={ email }
      error={ errorsEmail.email.error }
      helperText={ errorsEmail.email.error ? errorsEmail.email.message : ''}
      onBlur={ (e) => {
        setErrorsEmail(validarEmail(e.target.value))
      }}
    />
    <FormGroup>
      <FormControlLabel 
        control={ <Switch
          checked={ prom } 
          onChange={ (e) =>
            setProm(
              e.target.checked
            ) 
          }
          /> 
        } 
        label="Promociones" 
      />
    
      <FormControlLabel 
        control={ <Switch
          checked={ nov }
          onChange={ (e) => 
          setNov(e.target.checked
            )
          }
          />
        }
        label="Novedades"
      />
    
    </FormGroup>
    <Button variant='contained' type='submit' >Resgistrarse</Button>
  </form>
}

export default FormsignUp