import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { Switch } from '@mui/material'
import { FormGroup } from '@mui/material'
import { FormControlLabel } from '@mui/material'

function FormsignUp() {
  return <form>
    <TextField
      id='name'
      label='Nombre'
      variant='outlined'
      fullWidth
      margin='normal'
    />
    <TextField
      id='LastName'
      label='Apellidos'
      variant='outlined' 
      fullWidth
      margin='normal'
    />
    <TextField
      id='email'
      label='Email'
      variant='outlined'
      fullWidth
      margin='normal'
    />
    <FormGroup>
      <FormControlLabel 
        control={ <Switch defaultChecked /> } 
        label="Promociones" 
      />
    
      <FormControlLabel 
        control={ <Switch defaultChecked /> }
        label="Novedades"
      />
    
    </FormGroup>
    <Button variant='contained' >Resgistrarse</Button>
  </form>
}

export default FormsignUp