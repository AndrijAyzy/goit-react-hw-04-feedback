import styled from '@emotion/styled';

export const Container = styled.div`
  /* padding: 50px; */
  padding: 100px;
  background: linear-gradient(to top, black, 20%, cyan);
  text-align: center;
`;

export const Title = styled.h2`
margin: 30px;
background: linear-gradient(to right, red, orange, green, blue, violet);
background-size: 400% 400%;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
-webkit-animation: rainbow 20s ease infinite;
animation: rainbow 20s ease infinite;
font-size: 25px;
line-height: 25px;
}

@-webkit-keyframes rainbow {
0% { background-position: 0% 50% }
50% { background-position: 100% 50% }
100% { background-position: 0% 50% }
}

@keyframes rainbow {
0% { background-position: 0% 50% }
50% { background-position: 100% 50% }
100% { background-position: 0% 50% }
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
    color: #000000;
    background: #efff9e;
    tansition: all .3s linear;
    -webkit-transition: all .3s linear;
    -moz-transition: all .3s linear; 
    border: 1px solid #f27900; 
    background-color: ##0800ff;
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
