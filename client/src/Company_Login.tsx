import {
    Anchor,
    Button,
    Checkbox,
    Paper,
    PasswordInput,
    Text,
    TextInput,
    Title,
  } from '@mantine/core';
  import classes from './Company_Login.module.css';
import { useNavigate } from 'react-router-dom';
import {auth} from "./firebase/config"
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';

  
  export function Company_Login() {
    const nav = useNavigate();

    const [email, setEmail ]= useState(''); 
    const [password, setPassword ] = useState(''); 


    const on_submit = async () =>   { 

    signInWithEmailAndPassword(auth , email, password)
      .then((userCredential) => {

        const user = userCredential.user;
        console.log("Logged in user:", user);

        nav("/")
      })
      .catch((error : any) => {
        console.error("Login failed:", error.code, error.message);

      });
    }
    



    
    return (
      <div className={classes.wrapper}>
        <Paper className={classes.form} radius={0} p={30}>
          <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
            Login to explore a world of possiblities
          </Title>
  
          <TextInput label="Email address" placeholder="company@gmail.com" size="md" 
          onChange={(event) => setEmail(event.currentTarget.value)} />
          <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" onChange={(event) => setPassword(event.currentTarget.value)} />
          <Checkbox label="Keep me logged in" mt="xl" size="md" />
          <Button fullWidth mt="xl" size="md" onClick={on_submit}>
            Login
          </Button>
  
          <Text ta="center" mt="md">
            Don&apos;t have an account?{' '}
            <Anchor<'a'>  fw={700} onClick={() => nav('/Register')}>
              Register
            </Anchor>
          </Text>
        </Paper>
      </div>
    );
  }

  export default Company_Login