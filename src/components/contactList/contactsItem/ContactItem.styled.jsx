import styled from 'styled-components';

export const Item = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    &:not(:last-child) {
        margin-bottom: 30px;
    }
`;

export const Button = styled.button`
    padding:5px;
    width: 100px;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.25;

  background-color: skyblue;
  border:none;
  border-radius: 5px;
  cursor: pointer;
`;