import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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
    <input type="checkbox" name="" id="" />
    <label>Novedades</label>
    <input type="checkbox" name="" id="" />
    <Button variant='contained' >Resgistrarse</Button>
  </form>
}

export default FormsignUp