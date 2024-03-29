import styled from "styled-components";

export const ContainerItens = styled.div`
    width: 414px;
    padding: 25px;
    min-height: calc(100vh - 70px);
    margin-top: 25px;
    background: linear-gradient(157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%);
    border-radius: 61px 61px 0px 0px;
    display: flex;
    flex-direction: column;

    ${(props) => props.isUserPage && `
        
        li{
        width: 342px;
        height: 58px;
        margin: 14px 0;
        background: linear-gradient(157.44deg,
        rgba(255, 255, 255, 0.6) 0.84%,
        rgba(255, 255, 255, 0.6) 0.85%,
        rgba(255, 255, 255, 0.15) 100%);
        border: none;
        border-radius: 14px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        font-weight: 400;
        font-size: 20px;
        color: #FFF;
        }

        .bin-image{
            background: none;
            border: none;
            cursor: pointer;
        }

        .bin-image:hover{
            opacity: 0.8;
        }`
    }
`;