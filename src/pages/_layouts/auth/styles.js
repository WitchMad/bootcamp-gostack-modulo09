import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const fade = keyframes`
  from {
    transform:scale(1.1);
    opacity:0;
  }to {
    opacity:1;
    transform:scale(1);
  }
`;
export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  img {
    animation-name: ${fade};
    animation-duration: 500ms;
    animation-delay: 100ms;
    animation-fill-mode: backwards;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      animation-name: ${fade};
      animation-duration: 500ms;
      animation-delay: 300ms;
      animation-fill-mode: backwards;
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
    span {
      color: #e74c3c;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }
    button {
      animation-name: ${fade};
      animation-duration: 500ms;
      animation-delay: 400ms;
      animation-fill-mode: backwards;
      margin: 5px 0 0;
      height: 44px;
      background: #3b9eff;
      font-weight: bold;
      border: 0;
      color: #fff;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.3s;

      &:hover {
        background: ${darken(0.1, '#3b9eff')};
      }
    }

    * {
      color: #fff;
      margin-top: 15px;
      font-size: 14px;
      opacity: 0.8;
      animation-name: ${fade};
      animation-duration: 500ms;
      animation-delay: 400ms;
      animation-fill-mode: backwards;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
