import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

import contactStyles from "./contact.module.scss"
import projectsStyles from "./projects.module.scss"
import indexStyles from "./index.module.scss"

import TextField from "@material-ui/core/TextField"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        You can contact me using the form below or via{" "}
        <a
          className={indexStyles.link}
          to="https://www.linkedin.com/in/damienholden/"
          target="_blank"
        >
          LinkedIn
        </a>
        .
      </p>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-recaptcha="true"
        className={contactStyles.form}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden" style={{ display: "none" }}>
          <label>
            Don’t fill this out if you're human: <input name="bot-field" />
          </label>
        </p>
        <p>
          <TextField
            id="outlined-basic"
            color="primary"
            label="Name"
            variant="outlined"
            name="name"
            placeholder="Name"
            size="small"
            required
          />
        </p>
        <p>
          <TextField
            id="outlined-basic"
            color="primary"
            label="Email"
            variant="outlined"
            name="email"
            placeholder="Email"
            size="small"
            required
          />
        </p>
        <p>
          <TextField
            id="outlined-basic"
            color="primary"
            label="Message"
            variant="outlined"
            name="message"
            placeholder=""
            multiline={true}
            rows={4}
            size="small"
            required
          />
        </p>
        <div data-netlify-recaptcha="true"></div>
        <p>
          <button className={projectsStyles.button} type="submit">
            Send
          </button>
        </p>
      </form>
    </Layout>
  )
}

export default ContactPage
