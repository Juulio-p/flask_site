import { useForm } from '@mantine/form';
import { TextInput, Button, Card, Stack, Container } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import styles from './Register.module.css'; // Import the CSS module
import { useNavigate } from 'react-router-dom';

export function Register_Employee() {
  const nav = useNavigate();


    var endpoint= "https://5q87zjb5yd.execute-api.us-east-1.amazonaws.com";
    const form = useForm({
        initialValues: { name: "", email: "", password: "" },
        validate: {
          name: (value: string) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
          email: (value: string) => (/^\S+@\S+\.\S+$/.test(value) ? null : 'Invalid email'),
          password: (value: string) => (value.trim().length === 0 ? ' Password is required' : null),
        },
      });
      
      const onSubmit = async (values: { name: string; email: string; password: string }) => {
        const {auth} = await import("./firebase/config"); 
        const {createUserWithEmailAndPassword} = await import("firebase/auth");
        try { 

          console.log("Registering with:", values.email, values.password);

          const userCredential = await createUserWithEmailAndPassword(
            auth, 
            values.email, 
            values.password,
          )

          const uid = userCredential.user.uid; 
          const payload = {
            uid,
            name: values.name,
            email: values.email,
          };
          console.log("Payload being sent to API:", payload);

        const response = await fetch(`${endpoint}/Register_Employee`, {
          method: "POST",
          headers: {
            "Content-Type" : "application/json",
          },
          body: JSON.stringify(payload ), // Pass the form values directly
        });
        if(response.ok){
          nav('/Employee_Login')

        }






        // bs   CHat code below
      } catch (error: unknown) {
        if (error instanceof Error) {
          notifications.show({ message: 'Error creating user: ' + error.message, color: 'red' });
          console.error("Registration error:", error.message);
        } else {
          notifications.show({ message: 'An unknown error occurred.', color: 'red' });
          console.error("Unknown error:", error);
        }
      }
    }

const handleError = (errors: typeof form.errors) => {
  if (errors.name) {
    notifications.show({ message: 'Please fill the name field', color: 'red' });
  }
  if (errors.email) {
    notifications.show({ message: 'Please provide a valid email', color: 'red' });
  }

};
return (
        <Container size="xs" mt="xl">
          <Card shadow="sm" padding="lg" radius="md" withBorder className={styles.formWrapper}>
            <form onSubmit={form.onSubmit((values) => { handleError(form.errors); onSubmit(values); })}>
              <Stack>
                <TextInput
                  label="Name"
                  placeholder="Your name"
                  {...form.getInputProps('name')}
                  className={styles.formInput}
                />
                <TextInput
                  label="Email"
                  placeholder="Your email"
                  {...form.getInputProps('email')}
                  className={styles.formInput}
                  
                />
               <TextInput
               label="Password"
               placeholder="Password"
               type="password"
               {...form.getInputProps('password')}
               className={styles.formInput}
               />
               
                <Button type="submit" mt="sm" className={styles.submitButton}>
                  Submit
                </Button>
              </Stack>
            </form>
          </Card>
        </Container>
      );
}

export default Register_Employee; 