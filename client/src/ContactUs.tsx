import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import {
  ActionIcon,
  Button,
  Group,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';
import { ContactIconsList } from './ContactUsIcons';
import classes from './ContactUs.module.css';
import  {  useState } from "react";

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

export function ContactUs() {


  // make the setters 
  const [email, setEmail] = useState(""); 
  const [name, setName] = useState(""); 
  const [message, setMessage] = useState(""); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false); 
  
  const submit = async () => {
    setLoading(true); 
    setError(null); 
    setSuccess(false); 
  
    try {
      const response = await fetch("https://x6whi4ttv3.execute-api.us-east-1.amazonaws.com/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name, message }), // Ensure state values are used
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      setSuccess(true);

    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };



  const icons = social.map((Icon, index) => (
    <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
      <Icon size={22} stroke={1.5} />
    </ActionIcon>
  ));
 // const getName = async

  return (
    <div className={classes.wrapper}>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
        <div>
          <Title className={classes.title}>Contact us</Title>
          <Text className={classes.description} mt="sm" mb={30}>
          Leave your email and we will get back to you within 24 hours
          </Text>

          <ContactIconsList />

          <Group mt="xl">{icons}</Group>
        </div>
        <div className={classes.form}>
          <TextInput
            id = "Email"
            label="Email"
            placeholder="your@email.com"
            required
            classNames={{ input: classes.input, label: classes.inputLabel }}
            onChange={(e) => setEmail(e.target.value) }
          />
          <TextInput
            id ="Name"
            label="name"
            placeholder="John Doe"
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
            onChange={(e) => setName(e.target.value)}
         
         />
          <Textarea
            required
            id="msg"
            label="Your message"
            placeholder="I want to order your goods"
            minRows={4}
            mt="md"
            classNames={{ input: classes.input, label: classes.inputLabel }}
            onChange={(e) => setMessage(e.target.value)}

          
          />
          <Group justify="flex-end" mt="md">


          <Button onClick={submit} disabled={loading}>
        {loading ? "Sending..." : "Send message"}
      </Button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>Message sent successfully!</p>}





          </Group>




        </div>
      </SimpleGrid>
    </div>
  );
}