// Componentes
import styled from "styled-components";
import Background from '../../assets/bg-image.svg';
import { Link } from "react-router-dom";

export const Container = styled.div`
    background: url("${Background}");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Image = styled.img`
    margin-top: 25px;
`;


export const Label = styled.p`
    margin-left: 25px;
    font-size: 18px;
    font-weight: bold;
    line-height: 22px;
    letter-spacing: -0.408px;
    color: #FFF;
`;

export const Input = styled.input`
    width: 342px;
    height: 58px;
    padding-left: 25px;
    margin-bottom: 34px;
    background: linear-gradient(157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%);
    border: none;
    border-radius: 14px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 20px;
    font-style: normal;
    font-weight: normal;
    line-height: 28px;
    color: #FFFFFF;

    &::placeholder{
    color: #000;
}
`;

export const Button = styled(Link)`
    width: 340px;
    height: 58px;
    background-color: rgba(0, 0, 0, 0.8);
    border: none;
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
    
`;
