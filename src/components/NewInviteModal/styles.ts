import styled from "styled-components";

export const Container = styled.form`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  input, textarea {
    width: 100%;
    padding: 0 1rem;
    height: 3rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder{
      color: var(--text-body);
    }

    & + input, & + textarea {
      margin-top: .5rem;
    }
    -moz-appearance: textfield;

  }

  button[type="submit"] {
    width: 100%;
    padding: 0 2rem;
    height: 2.5rem;
    background: var(--fun-green-mix);
    color: #FFF;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  textarea {
    height: 5rem;
    padding-top: 0.8rem;
    resize: none;
  }
`;
