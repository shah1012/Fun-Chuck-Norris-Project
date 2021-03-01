import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";

const App = () => {
  // state
  const [norris, setNorris] = useState("");

  // styled components
  const MainBackground = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(to right, rgb(241, 91, 35), rgb(255, 247, 0));

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const CardDiv = styled.div`
    width: 700px;
    height: 400px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 50px 70px -20px rgba(0, 0, 0, 0.6);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 20px;

    @media screen and (max-width: 715px) {
      width: 500px;
      height: 300px;

      padding: 10px;
    }

    @media screen and (max-width: 510px) {
      width: 350px;
      height: 300px;

      padding: 2px;
    }
  `;
  const Button = styled.button`
    border: none;
    outline: none;
    cursor: pointer;

    width: 150px;
    height: 75px;
    font-size: 2rem;
    border-radius: 10px;

    background-color: orange;
    color: white;
    font-weight: 100;
  `;

  const NorrisDiv = styled.div`
    width: 100%;
    height: 200px;

    font-size: 1.4rem;
    text-align: center;

    @media screen and (max-width: 715px) {
      font-size: 1.4rem;
    }
  `;

  const Header = styled.div`
    font-size: 4rem;
    color: white;

    margin: 50px;

    @media screen and (max-width: 715px) {
      font-size: 3rem;
    }

    @media screen and (max-width: 510px) {
      font-size: 2rem;
    }

    @media screen and (max-width: 510px) {
      font-size: 1.5rem;
    }
  `;

  useEffect(() => {
    const fetchChuck = async () => {
      await fetch("https://api.chucknorris.io/jokes/random")
        .then((res) => res.json())
        .then((data) => {
          setNorris(data.value);
        });
    };
    fetchChuck();
  }, []);

  const fetchNorris = async () => {
    await fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((data) => {
        setNorris(data.value);
      });
  };

  return (
    <MainBackground>
      <Header className="header">Chuck Norris Generator</Header>
      <CardDiv>
        <NorrisDiv>{norris}</NorrisDiv>
        <Button onClick={fetchNorris}>Genarate</Button>
      </CardDiv>
    </MainBackground>
  );
};

export default App;
