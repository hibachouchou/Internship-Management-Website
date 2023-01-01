import styled from "styled-components";

//React router
import { Link } from 'react-router-dom'



export const colors = {
    primary: '#fff',
    theme: '#F9A826',
    light1: '#F3F4F6',
    light2: '#ESE7EB',
    dark1: '#1F2937',
    dark2: '#4B5563',
    dark3: '#9CA3AF',
    red: "#DC2626",
    blue: "#0546A0",
    roze: "#C13584",
    b: "#1DA1F2",
}


//Styled components

export const StyledFormArea = styled.div`
    background-color: ${props => props.bg ||
        colors.light1};
    text-align: center;
    padding: 25px 50px;
    border-radius:5px;
    
`;

export const StyledTitle = styled.h2`
   font-size: ${(props) => props.size}px;
   text-align : center;
   color: ${(props) => props.color ? props.colors : colors.primary};
   padding :10px;
   marging-bottom: 25px;
   letter-spacing: 2px;
   font-family: Copperplate;
   
   `;

export const StyledButton = styled(Link)`
   padding: 20px;
   width: 150px;
   background-color: transparent;
   font-size: 16px;
   border: 3px solid ${colors.primary};
   border-radius: 25px;
   color: ${colors.primary};
   text-decoration: none;
   text-align: center:
   transition: ease-in-out 0.3s;
   outline:0;
   margin:10px;
   font-family:Monaco;

   &:hover{
       background-color: ${colors.primary};
       color: ${colors.theme};
       cursor: pointer;

   }
`;

export const ButtonGroup = styled.div`
    display: felx;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 25px;
    margin-left: 50px;
    

`;


//Input
export const StyledTextInput = styled.input`
    width: 250px;
    padding: 15px;
    padding-left: 50px;
    font-size: 17px;
    letter-spacing:1px;
    color: ${colors.dark1};
    border: 0;
    outline:0;
    display: block;
    tansition: ease-in-out 0.3s;

    ${(props) => props.invalid &&
        `background-color:${colors.red};
     color : ${colors.primary};`}

     &:focus {
        background-color: ${colors.dark2};
        color: ${colors.primary};
     }
`;

export const StyledLabel = styled.p`
    text-align: left ;
    font-size: 13px;
    font-weight: bold;
    margin-top: 5px;
    

`;


export const StyledFormButton = styled.button`
   
 
`;


export const ErrorMsg = styled.div`
    font-size: 15px;
    color: ${colors.red};
    margin-top: -5px;
    margin-bottom: 10px;
    text-align: left;
`;

export const ExtraText = styled.p`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => (props.color ? props.color : colors.dark2)};
    padding: 2px;
    margin-top: 10px;

`;

export const TextLink = styled(Link)`
    text-decoration: none;
    color: ${colors.theme};
    transition: ease-in-out 0.3s;

    &:hover {
        text-decoration: underline;
        letter-spacing: 2px;
        font-weight: bold;
    }
`;



//Icons

export const StyledIcon = styled.p`
    color: ${colors.dark1};
    position: absolute;
    font-size: 21px;
    top: 35px;
    padding-left: 5px;
    padding-top:10px;
   
    ${(props) => props.right && `left: 220px;`};
`;




