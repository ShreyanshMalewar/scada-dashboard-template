import{ useEffect, useRef, useState } from 'react'
import Authwrap from '../profile/authwrap';
import MainCard from '../skel/MainCard';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';


const login = () => {
    function LoginPage() {
        const useRef = useRef();
        const errRef = useRef();


        const [username, setUsername] = useState('');
        const [pssssassword, setPassword] = useState('');
        const [error, setError] = useState('');

        //Temproray success later route woth pages
        const [success, setSuccess] = useState('');
        const [errMsg, setErrMsg]= useState('');

        useEffect(()=> {
            useRef.current.focus();
                },[])

                useEffect(()=> {
                    setErrMsg('');
                }, [username, password])
        
  return (
<section>
    <Authwrap>
      <MainCard>              
      <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item sx={{ mb: 3 }}>
                  <Link to="#">
                    <Logo />
                  </Link>
                </Grid>
                  </Grid>
                  </MainCard>
    </Authwrap>
</section>
  )
}
}

export default login;