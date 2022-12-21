import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Text,
  Textarea,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";

export const ContactForm = () => {
  const [toastMessage, setToastMessage] = useState(undefined);
  const toast = useToast();

  useEffect(() => {
    if (toastMessage) {
      const { title, body, status } = toastMessage;
      toast({
        title,
        description: body,
        status: status,
        duration: 9000,
        isClosable: true,
      });
    }
    setToastMessage(undefined);
  }, [toastMessage, toast]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() =>
        setToastMessage({
          title: "Sent",
          body: "Your email has been sent. I'll be in contact shortly",
          status: "success",
        })
      )
      .catch(() =>
        setToastMessage({
          title: "Oops",
          body: "Email not sent, please try again",
          status: "error",
        })
      );
  };

  return (
    <Container maxW="container.md" p={4} mt={4}>
      <Box>
        <Heading as="h2">Contact</Heading>
        <Text mt={2} mb={4}>
          Any questions or you just wanna talk about my experience, then leave
          me a message.
        </Text>
      </Box>
      <form
        name="contact"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <Input type="hidden" name="form-name" value="contact" />
        <Input
          my={3}
          isRequired
          placeholder="Your Name"
          type="text"
          name="name"
          bg={useColorModeValue("", "#fff")}
          color={useColorModeValue("", "gray.800")}
          _placeholder={{ color: useColorModeValue("", "gray.400") }}
        />
        <Input
          my={3}
          isRequired
          placeholder="Your Email"
          type="email"
          name="email"
          bg={useColorModeValue("", "#fff")}
          color={useColorModeValue("", "gray.800")}
          _placeholder={{ color: useColorModeValue("", "gray.400") }}
        />
        <Textarea
          my={3}
          h="150px"
          isRequired
          placeholder="Message"
          name="message"
          bg={useColorModeValue("", "#fff")}
          color={useColorModeValue("", "gray.800")}
          _placeholder={{ color: useColorModeValue("", "gray.400") }}
        ></Textarea>
        <Button type="submit">Send</Button>
      </form>
    </Container>
  );
};
