import * as React from 'react';
import Button from '@mui/material/Button';

function FormsignUp() {
  return <form>
    <label>Nombre</label>
    <input type="text" name="" id="" />
    <label>Apellido</label>
    <input type="text" name="" id="" />    
    <label>Correo electronico</label>
    <input type="email" name="" id="" />
    <label>Promociones</label>
    <input type="checkbox" name="" id="" />
    <label>Novedades</label>
    <input type="checkbox" name="" id="" />
    <Button variant='contained' >Resgistrarse</Button>
  </form>
}

export default FormsignUp