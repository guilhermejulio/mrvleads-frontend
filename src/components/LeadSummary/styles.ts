import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -8.5rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      svg {
        width: 1.5rem;
        height: 1.5rem;
      }

      .invite-icon-summary {
        fill: var(--fun-green-mix);
      }
      
      .declined-icon-summary {
        fill: var(--neon-red)
      }

    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 600;
      line-height: 3rem;
    }

    &.hightlight-background {
      background: var(--california);
      color: #fff;
    }
  }
`;
