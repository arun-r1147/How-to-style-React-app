import { FC } from "react";
import logo from "../../public/logo.png";
import { styled } from "styled-components";

const Headers = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  & img {
    object-fit: contain;
    margin-bottom: 2rem;
    width: 11rem;
    height: 11rem;
  }

  & h2 {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.4em;
    text-align: center;
    text-transform: uppercase;
    color: #9a3412;
    font-family: "Pacifico", cursive;
    margin: 0;
  }

  & p {
    text-align: center;
    color: #a39191;
    margin: 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 4rem;

    & h2 {
      font-size: 2.25rem;
    }
  }
`;

export const Header: FC = () => {
  return (
    <Headers>
      <img src={logo} alt="canvas image" />
      <h2>Let's learn React Styling</h2>
    </Headers>
  );
};
