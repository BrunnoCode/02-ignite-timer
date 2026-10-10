import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  min-height: calc(100vh - 10rem);
  width: calc(100% - 4rem);
  margin: 5rem auto;

  padding: 2.5rem;

  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  @media (min-width: 768px) and (max-width: 1023px) {
    width: calc(100% - 3rem);
    min-height: calc(100vh - 6rem);
    margin: 3rem auto;
    padding: 2rem;
  }

  @media (max-width: 767px) {
    width: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 1.5rem 1rem;
    border-radius: 0;
  }
`
