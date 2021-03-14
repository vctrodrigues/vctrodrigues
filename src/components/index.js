import styled from "styled-components";

import Menu from "./Menu";
import SocialBar from "./SocialBar";

export const Headline = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: 42px;
  line-height: 100%;

  color: #00edd4;
`;

export const CodeText = styled.p`
  font-family: "Roboto Mono", monospaced;
  font-size: 12px;
  color: #7957f2;
`;

export const CodeBlock = styled(CodeText)`
  padding: 15px 30px;
  background-color: #24074a;
  color: #4907a2;
  border-radius: 10px;
`;

export { Menu, SocialBar };
