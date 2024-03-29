// Componentes
import styled from "styled-components";
import Background from '../../assets/bg-image-2.svg';
import { Link } from "react-router-dom";

export const Container = styled.div`
    height: 100%;
    min-height: 100vh;
    background: url("${Background}");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Image = styled.img`
    margin-top: 30px;
`;

export const UserInfo = styled.div`
    height: 58px;
    display: flex;
    align-items: center;
    gap: 50px;
    margin-bottom: 10px;
    padding: 15px;
    background: linear-gradient(157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%);
    border-radius: 14px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 20px;
    font-style: normal;
    font-weight: normal;
    line-height: 28px;
    color: #FFFFFF;

    p {
        text-align: center;
        
    }
`;

export const BinButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    margin-left: auto;

    &:hover{
        opacity: 0.6;
    }
`;

export const Button = styled(Link)`
    width: 342px;
    height: 58px;
    margin-top: 20px;
    background-color: transparent;
    border: 1px solid #FFF;
    outline: none;
    cursor: pointer;
    border-radius: 14px;
    font-weight: bold;
    color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    &:hover{
        opacity: 0.8
    }

    &:active{
        opacity: 0.5;
    }
    

    img{
        transform: rotateY(180deg);
    }
`;


