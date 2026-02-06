import { Button, TextInput } from "@mantine/core";
import {  useState } from "react";


function ChatBot() { 

    const[userInput , setInput ] = useState(''); 

    const handleSend = () => {
        fetch("http://localhost:5000/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: userInput }),
        })
          .then(res => res.json())
          .then(data => {
            console.log("AI says:", data.reply);
            setInput(""); // Clear input after sending
          });
      };



        return (
            <>

            <div style={{color: "white"  } }> Ai Bot in progess

                <div style={{display:'flex'}}> 
                <TextInput 
                value = {userInput}
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Ask Me for advice!"/>

                 <Button onClick={handleSend}> Submit</Button>
                </div>
                <br/>

            </div>
           


            
            
            </>
        ); 

}

export default ChatBot; 