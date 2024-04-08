import * as React from 'react';
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';

export default function LogoutButton({name,onclick}) {
  return (
    <>
    <Link to={'/'}>
      <Button variant="contained" onClick={()=>{onclick}}>{name}</Button>
    </Link>
    </>
  );
}