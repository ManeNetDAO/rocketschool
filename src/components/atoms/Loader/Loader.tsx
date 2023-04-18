import styled, { keyframes } from 'styled-components';

const fullSpin = keyframes`
  from {
    transform:rotate(0deg);
  }
  to {
    transform:rotate(360deg);
  }
`;

const Moon = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -100px;
  width: 200px;
  height: 200px;
  background: #c7cbd0;
  border-radius: 50%;
  box-shadow: inset -25px 0px 0 0px #9098a1;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

const Image = styled.img`
  position: absolute;
  width: 30px;
  height: 20px;

  animation: ${fullSpin} 4s infinite;
  animation-timing-function: linear;
  transform-origin: 335% 500%;
`;

const ListItem = styled.li`
  position: absolute;
  list-style: none;
  background: #737277;
  border-radius: 50%;
  &:nth-child(1) {
    left: 25px;
    top: 60px;
    width: 50px;
    height: 50px;
    box-shadow: inset 6px -2px 0 0px #414043;
  }
  &:nth-child(2) {
    left: 150px;
    top: 50px;
    width: 25px;
    height: 25px;
    box-shadow: inset 3px -1px 0 0px #414043;
  }

  &:nth-child(3) {
    left: 100px;
    top: 150px;
    width: 25px;
    height: 25px;
    box-shadow: inset 3px -1px 0 0px #414043;
  }

  &:nth-child(4) {
    left: 50px;
    top: 150px;
    width: 12.5px;
    height: 12.5px;
    box-shadow: inset 2.4px -0.8px 0 0px #414043;
  }

  &:nth-child(5) {
    left: 87.5px;
    top: 16.66666667px;
    width: 12.5px;
    height: 12.5px;
    box-shadow: inset 2.4px -0.8px 0 0px #414043;
  }

  &:nth-child(6) {
    left: 114.28571429px;
    top: 80px;
    width: 12.5px;
    height: 12.5px;
    box-shadow: inset 2.4px -0.8px 0 0px #414043;
  }

  &:nth-child(7) {
    left: 181.81818182px;
    top: 100px;
    width: 12.5px;
    height: 12.5px;
    box-shadow: inset 2.4px -0.8px 0 0px #414043;
  }
`;

export const Loader = () => {
  return (
    <Moon>
      <Image src="/images/rocket3.png" alt={'Loading'} />
      <ul>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </ul>
    </Moon>
  );
};
