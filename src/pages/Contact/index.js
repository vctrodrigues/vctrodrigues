import React from "react";

import { Send } from "react-feather";

import {
  Menu,
  Headline,
  Breadcrumb,
  InputButton,
  Input,
  Textarea,
} from "../../components";

import "./styles.sass";

const Contact = () => {
  return (
    <div className="contact">
      <Menu />
      <div className="container">
        <Breadcrumb>.about()</Breadcrumb>
        <Headline>let's talk</Headline>
        <form>
          <Input type="text" placeholder="Your name" />
          <Input type="text" placeholder="Your contact email" />
          <Textarea type="text" placeholder="What do you talk about?" />
          <InputButton type="submit">
            <Send className="icon" size={20} />
            <span>Send message</span>
          </InputButton>
        </form>
      </div>
    </div>
  );
};

export default Contact;
