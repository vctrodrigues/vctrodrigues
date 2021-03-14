import React from "react";
import Typist from "react-typist";

import {
  Menu,
  SocialBar,
  Headline,
  CodeText,
  CodeBlock,
} from "../../components";

import "./styles.sass";

const Home = () => {
  return (
    <div className="home">
      <Menu />
      <div className="container">
        <SocialBar />
        <Headline>
          Howdy.
          <br />
          I'm Victor
        </Headline>
        <Typist
          cursor={{
            show: false,
          }}
        >
          <CodeText>$ {">"} vim skills.js</CodeText>
          <Typist.Delay ms={500} />
          <CodeBlock>
            {"//"} front-end developer
            <br />
            skills.dev = [<br />
            ”react.js",
            <br />
            ”vue.js”
            <br />
            ]<br />
            <br />
            {"//"} designer
            <br />
            skills.des [<br />
            ”ux”,
            <br />
            ”motion”
            <br />
            ]<br />
          </CodeBlock>
        </Typist>
      </div>
    </div>
  );
};

export default Home;
