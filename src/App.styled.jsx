import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  padding-left: 0;
  list-style: none;
}

img {
  display: block;
}

body {
  font-family: "Cera Pro", sans-serif;
  background-color: #eeeeee;
}

li {
  list-style-type: none; /* Убираем маркеры */
}

a {
  text-decoration: none; /* Убираем подчеркивание */
}

.link {
  text-decoration: none;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
 
`;

export const MainTitle = styled.h1`
    padding-top: 30px;
  padding-bottom: 30px;
  font-weight: 600;
  font-size: 30px;
  line-height: 1.25;
  text-align: center;
  color: black;
`;

export const SecondaryTitle = styled.h2`
    padding-top: 30px;
  padding-bottom: 15px;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.25;
  text-align: center;
  color: black;
`;

export const PhonebookWrap = styled.div`
width: 400px;
  margin: 0 auto;
  background-color: #eeeeee;
`;