import React, { useState, useRef } from "react";
import axios from "axios";

import PeopleChatting from '../../assets/people-chatting.svg';
import Arrow from '../../assets/arrow.svg';

import H1  from "../../components/Title";
import ContainerItens from "../../components/ContainerItens";

import { Container, Image, Label, Input, Button } from "./styles";

const Home = function () {
  // >>> codigo javascript <<<

  const [users, setUsers] = useState([]);  //React Hook
  const inputName = useRef(); //React Hook
  const inputAge = useRef(); //React Hook

  async function addUser() {
    //utilizando o axios para realizar as requisições no back-end, das informações do usuario(projeto-node-usuario)
    const newUser = await axios.post('http://localhost:8000/users', { name: inputName.current.value, age: inputAge.current.value })

    //spread operator, permite que o array de usuarios seja expandido, podendo adicionar mais usuarios ao inves de sobrepor o usuario ja exitente.
    setUsers([...users, newUser.data])

  };

  return ( // renderizando os componentes criados no arquivo styles.js

    <Container>
      <Image alt="two people chatting" src={PeopleChatting} />

      <ContainerItens>
        <H1>Olá</H1>

        <Label>Nome</Label>
        <Input ref={inputName} placeholder="Nome:"></Input>

        <Label>Idade</Label>
        <Input ref={inputAge} placeholder="Idade:"></Input>


        <Button to="/usuarios" onClick={addUser}>
          Cadastrar <img alt="arrow" src={Arrow} />
        </Button>


      </ContainerItens>
    </Container>
  )
};

export default Home;