import { Box, Button, Slide } from "@mui/material";
import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import ActionProvider from "./Components/ActionProvider";
import config from "./Components/config";
import MessageParser from "./Components/MessageParser";
import "../CSS/Chat.css"
export default function Index() {
  
  const [isChatBoxOpen, setIsChatBoxOpen] = useState(false);
  const onClickCloseChatBox = () => {
    setIsChatBoxOpen(false);
  };
  const onClickOpenChatBox = () => {
    setIsChatBoxOpen(true);
  };
  return (
    <div >
      <div className="static flex  container flex-col  h-screen w-screen ">
        <div className="absolute shadow-lg right-5 bottom-10 mx-auto">     
        <Button
          onClick={
            isChatBoxOpen
              ? () => {
                  onClickCloseChatBox();
                }
              : () => {
                  onClickOpenChatBox();
                }
          }
        >
          {isChatBoxOpen ? "Okay" : "Help"}
        </Button>
        </div>

      <Slide timeout={500} direction="up" in={isChatBoxOpen} >
        <Box className=" shadow-lg flex justify-center items-center  md:absolute  md:right-36 md:bottom-4 ">
        <Chatbot actionProvider={ActionProvider} config={config} messageParser={MessageParser} />
        </Box>
       
      </Slide>
      </div>
    </div>
  );
}
