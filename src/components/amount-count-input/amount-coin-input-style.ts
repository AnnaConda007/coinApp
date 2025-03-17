import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 0 10px;
`;

export const InputContainer = styled.div`
  display: flex;
  background: #f0f0f0;
  padding: 5px;
  border-radius: 10px;
  flex-grow: 1;
`;

export const Input = styled.input.attrs({
  type: 'number',
})`
  border: none;
  background: transparent;
  outline: none;
  height: 30px;
  width: 100%;
  text-align: center;
  padding: 0;
  font-size: 14px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    display: none;
  }
`;

export const InputBtn = styled.button`
  background: transparent;
  border: 1px solid #cccccc;
  padding: 5px;
  font-size: 14px;
  cursor: pointer;
  height: 30px;
  width: 24px;
  border-radius: 3px;

  &:hover {
    background-color: #eaeaea;
  }

  &:focus {
    outline: none;
    background-color: #eaeaea;
  }
`;
