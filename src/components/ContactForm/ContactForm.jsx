import React from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Container,
  Textarea,
} from "@chakra-ui/react";
// import { ContactWrapper } from "./ContactForm.styles";

export const ContactForm = () => {
  return (
    <Container maxW="container.md" p={4} mt={4}>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <Input
          my={3}
          isRequired
          placeholder="Your Name"
          type="text"
          name="name"
        />
        <Input
          my={3}
          isRequired
          placeholder="Your Email"
          type="email"
          name="email"
        />
        <Textarea
          my={3}
          h="150px"
          isRequired
          placeholder="Message"
          name="message"
        ></Textarea>
        <Button
          _hover={{
            bgGradient: "linear(to-r, red.500, yellow.500)",
          }}
          type="submit"
        >
          Send
        </Button>
      </form>
    </Container>
  );
};
