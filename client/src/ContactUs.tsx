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
import React, { useState } from "react";



/*****************  
Attemping to make api calls
*****************/


  



/*****************  
Attemping to make api calls
*****************/

var endpoint = 'https://biil7bvmei.execute-api.us-east-1.amazonaws.com'	 
const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

export function ContactUs() {

  // state managment for the froms
  const [email, setEmail] = useState<String>();
  const [name, setName ] = useState<String>(); 
  const [message, setMessage] = useState<String>(); 
  const [ loading , setLoading] = useState<boolean> (false); 
  const [error, setError] = useState<String | null>(null);
  const [sucess, setSuccess] = useState<boolean> (false); 

  const submit = async () => {
    setLoading(true); 
    setError(null); 
    setSuccess(false); 
  

  try { 
    const response = await fetch(`${endpoint}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        name,
        message,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    };

    const data = await response.json();
    setSuccess(true);
    alert("Message sent successfully!");
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
            <Button 
              onClick={submit} 
              className={classes.control}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send message"}
            </Button>
          </Group>




        </div>
      </SimpleGrid>
    </div>
  );
}