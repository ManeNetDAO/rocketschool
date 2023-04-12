import styled from 'styled-components';

export const Button = styled.button<{
  isLight?: boolean;
  padding?: string;
  margin?: string;
}>`
  cursor: pointer;
  border-style: none;
  text-align: center;
  white-space: nowrap;

  font-size: 15px;
  font-weight: 500;
  padding: ${({ padding }) => `${padding || '10px 30px'}`};
  ${({ margin }) => margin && `margin: ${margin};`}

  font-family: Poppins, sans-serif;
  border-radius: 63px;
  background: linear-gradient(
    277.41deg,
    #ff5c00 18.51%,
    #ff7700 35.87%,
    #ff8c39 64.93%
  );
  color: #ffffff;

  ${({ isLight }) =>
    isLight &&
    `
  background: #FFFFFF;
  color: #282828;
  border: 2px solid;
  border-color #FF8C39;
  `}

  &:hover {
    opacity: 0.8;
  }
`;
