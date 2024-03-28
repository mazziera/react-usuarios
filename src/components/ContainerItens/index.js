import React from "react";

import {ContainerItens as Container} from "./styles";

function ContainerItens(props) {
console.log(props);
    return <Container >{props.children}</Container>
};

export default ContainerItens;