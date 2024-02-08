import styled from '@emotion/styled';

export const Container = styled.div`
  /* padding: 50px; */
  padding: 100px;
  background: #E0FFFF;
  text-align: center;
`;

export const Title = styled.h2`
  margin-bottom: 30px;
  color: #333340;
  text-transform: uppercase;
  font-size: 20px;
`;

export const Button = styled.button`
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

export const List = styled.li`
  margin: 0 10px;
  display: inline-flex;
  justify-content: center;
  text-align: center;
  list-style: none;
`;
