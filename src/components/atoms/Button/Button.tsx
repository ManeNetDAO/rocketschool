import styled from 'styled-components';

export const Button = styled.button<{
  isLight?: boolean;
  padding?: string;
  margin?: string;
  fontSize?: string;
  alignSelf?: string;
}>`
  cursor: pointer;
  border-style: none;
  text-align: center;
  white-space: nowrap;

  font-size: ${({ fontSize }) => `${fontSize || '15px'}`};
  font-weight: 500;
  padding: ${({ padding }) => `${padding || '10px 30px'}`};
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ alignSelf }) => alignSelf && `align-self: ${alignSelf};`}

  font-family: Poppins, sans-serif;
  border-radius: 63px;
  background: linear-gradient(
    277.41deg,
    #ff5c00 18.51%,
    #ff7700 35.87%,
    #ff8c39 64.93%
  );
  color: #ffffff;

  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
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
