import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  gap: 1rem;

  span {
    background: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 8rem;
    line-height: 1;

    span {
      padding: 1.5rem 0.75rem;
    }
  }

  @media (max-width: 767px) {
    width: 100%;
    justify-content: center;
    font-size: 4rem;
    line-height: 1;
    gap: 0.375rem;

    span {
      min-width: 3.5rem;
      padding: 1rem 0.25rem;
      text-align: center;
    }
  }

  @media (max-width: 359px) {
    font-size: 3.75rem;
    gap: 0.25rem;

    span {
      min-width: 3.25rem;
      padding: 0.875rem 0.125rem;
    }
  }
`

export const Separator = styled.div`
  color: ${(props) => props.theme['green-500']};
  padding: 2rem 0;
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 3rem;
    padding: 1.5rem 0;
  }

  @media (max-width: 767px) {
    width: 1.25rem;
    padding: 1rem 0;
  }

  @media (max-width: 359px) {
    width: 1rem;
    padding: 0.875rem 0;
  }
`
