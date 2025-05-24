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
  import classes from './Employee_Login.module.css';
import { useNavigate } from 'react-router-dom';
import { notifications } from '@mantine/notifications';


import { useState } from 'react';

  
export function Employee_Login() {
    const nav = useNavigate();

    const [email, setEmail ]= useState(''); 
    const [password, setPassword ] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
 


    const on_submit = async () =>   { 
      const {auth}  = await import("./firebase/config")
      const { signInWithEmailAndPassword } = await import("firebase/auth");


    signInWithEmailAndPassword(auth , email, password)
      .then((userCredential) => {
                notifications.show({ message: 'Login failed', color: 'red', autoClose: 3000 });


        const user = userCredential.user;
        console.log("Logged in user:", user);

        nav("/")
      })
      .catch((error: any) => {
        console.error("Login failed:", error.code, error.message);
      
        if (error.code === 'auth/user-not-found') {
          setErrorMsg('No user found with this email.');
        } else if (error.code === 'auth/wrong-password') {
          setErrorMsg('Incorrect password.');
        } else if (error.code === 'auth/invalid-email') {
          setErrorMsg('Invalid email format.');
        } else {
          setErrorMsg('An unexpected error occurred.');
        }
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
          {errorMsg && (
  <Text color="red" mt="sm" ta="center">
    {errorMsg}
  </Text>
)}
          <Button fullWidth mt="xl" size="md" onClick={on_submit}>
            Login
          </Button>
          
  
          <Text ta="center" mt="md">
            Don&apos;t have an account?{' '}
            <Anchor<'a'>  fw={700} onClick={() => nav('/Register_Employee')}>
              Register
            </Anchor>
          </Text>
        </Paper>
      </div>
    );
  }

  export default Employee_Login