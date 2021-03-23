import styled, { css } from "styled-components";

import Menu from "./Menu";
import SocialBar from "./SocialBar";
import YoutubeVideo from "./YoutubeVideo";
import Breadcrumb from "./Breadcrumb";

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
  color: #00edd4;
  border-radius: 10px;
`;

export const ProfilePhoto = styled.img`
  width: 150px;
  height: 150px;

  border-radius: 75px;
  object-fit: cover;
`;

const ButtonStyles = css`
  height: 40px;
  width: fit-content;
  padding: 0 20px;

  border-radius: 20px;
  border: 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: #00edd4;
  box-shadow: 0 2px 4px 0 rgba(22, 242, 242, 0.5);

  transition: 0.3s ease-in-out 0.1s;
  cursor: pointer;

  font-family: "Montserrat";
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;

  color: #24074a;

  &:hover {
    background-color: #0b8073;
    color: #24074a;
  }

  .icon {
    stroke: #24074a;
  }

  span {
    margin-left: 5px;
    font-family: "Montserrat", sans-serif;
    color: #24074a;
  }
`;

export const Button = styled.a`
  ${ButtonStyles}
`;

const InputStyles = css`
  border: 0;
  border-radius: 10px;

  margin: 5px 0;
  padding: 0 20px;

  background-color: #24074a;
  color: #7957f2;
`;

export const Input = styled.input`
  ${InputStyles}
  height: 50px;
`;

export const Textarea = styled.textarea`
  ${InputStyles}
  height: 200px;
  padding: 20px;
`;

export const InputButton = styled.button`
  ${ButtonStyles}
  border-radius: 10px;
`;

export { Menu, SocialBar, YoutubeVideo, Breadcrumb };
