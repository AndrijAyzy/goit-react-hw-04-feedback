import styled from '@emotion/styled';

export const ButtonList = styled.ul`
list-style:none;
display: flex;
flex-direction: row;
margin: 0 auto;
padding: 0;`

export const ListItem = styled.li`
&:not(:last-child) {
	margin-right: 25px;
}`


export const ButtonOption = styled.button`
margin: 0px;
margin-top: 15px;
margin-bottom: 30px;
width: 100px;
height: 40px;
background-color: #000000;
color: #ffffff;
border-radius: 10px;
border: none;
outline: none;
cursor: pointer;
transition: all 0.25s linear 0s;
&:hover,
&:focus {
  border: 1px solid #ff0000;
  transform: scale(1.1);
}
`;
