import styled from "styled-components";

export const Line = styled.hr`
  border: .5px solid;
  color: rgb(0 0 0 / 4%);
`;

export const Container = styled.div`
  .MuiTypography-root {
    display: flex;
    align-items: left;
  }
`;

export const CardDescription = styled.div`
  .MuiTypography-root {
    color: var(--text-color);
    font-size: .9rem;
    font-weight: 500;
    line-height: 1.5;
    padding: 1rem 0 .75rem 0;
  }
  
`;

export const CardContact = styled.div`
  display: flex;
  span {
    margin-right: .5rem;
    color: var(--california);
    font-weight: 600;
  }
  svg {
    margin-right: .2rem;
    color: #666666;
  }
  .MuiTypography-root {
    display: flex;
    align-items: center;
  }
`;

export const Info = styled.div`
  display: flex;
  margin-right: 1rem;
  align-items: center;
  svg {
    margin-right: .25rem;
  }
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  button {
    margin-right: 1rem;
  }
  button:nth-child(1) {
    background-color: var(--california);
  }
  button:nth-child(2) {
    border-color: darkgray;
    color: darkgray;
  }
`;

export const Price = styled.span`
  font-weight: bold;
  margin-right: .2rem;
`;
