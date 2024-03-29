import React, { useState, useEffect } from "react";
import axios from "axios";

import People from '../../assets/headers.svg';
import Arrow from '../../assets/arrow.svg';
import Bin from '../../assets/bin.svg';
import H1 from '../../components/Title';
import ContainerItens from "../../components/ContainerItens";

import { Container, Image, Button, UserInfo, BinButton } from "./styles";

const Users = function () {
  // >>> codigo javascript <<<

  const [users, setUsers] = useState([]);  //React Hook


  useEffect(() => {
    async function buscarUsuario() {
      const usersInData = await axios.get('http://localhost:8000/users')

      setUsers(usersInData.data)
    }

    buscarUsuario()
  }, []); //[]array de dependencia = seta um estado react, no caso é a variavel users declarada no react hook useState.

  async function deleteUser(userId) {

    await axios.delete(`http://localhost:8000/users/${userId}`)

    const usersCreated = users.filter((user) => user.id !== userId)
    /*busca no backend o id do usuario, verifica se o id de cada usuário(setado na key do elemento li), no array é diferente do userId especificado como parametro da função.
    Se o id do usuario for diferente, ele não é alocado ao novo array(usersCreated), sendo deletado. */


    setUsers(usersCreated)
  };


  return ( // renderizando os componentes criados no arquivo styles.js

    <Container>
      <Image alt="three people" src={People} />

      <ContainerItens isuserpage={true.toString()}>
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <UserInfo>
              <p>{user.name}</p> <p>{user.age} anos</p>

              <BinButton  onClick={() => deleteUser(user.id)} className="bin-image">
                <img alt="bin image" src={Bin} />
              </BinButton>

              </UserInfo>
            </li>
          ))
          }
        </ul>


        <Button to="/">
          <img alt="arrow" src={Arrow} /> Voltar
        </Button>
      </ContainerItens>

    </Container>
  )
}

export default Users;