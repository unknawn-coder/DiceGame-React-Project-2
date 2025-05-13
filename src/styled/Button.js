import styled from "styled-components";
export const Button = styled.button`
color: white;
padding: 10px 18px;
background:#000000;
border-radius: 5px;
min-width: 220px;
border: none;
font-size: 16px;
font-weight : bold;
border: 1px solid transparent;
cursor: pointer;
transition: 0.4s background ease-in;
&:hover{
    background:rgb(246, 246, 246);
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;

}
`;
export const OutlineButton = styled(Button)`
background-color: white;
color: black;
border: 1px solid black;
&:hover{
    background: black;
    border: 1px solid transparent;
    color: white;
    

}
    `;