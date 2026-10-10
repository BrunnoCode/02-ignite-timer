import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    width: 100%;
    max-width: 52rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    form {
      gap: 3rem;
    }
  }

  @media (max-width: 767px) {
    form {
      gap: 2.5rem;
    }
  }
`

export const BaseCountButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']};

  font-weight: bold;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  @media (max-width: 767px) {
    min-height: 3.5rem;
  }
`

export const StartCountButton = styled(BaseCountButton)`
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};
  transition: 0.3s;

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }
`
export const StopCountButton = styled(BaseCountButton)`
  background: ${(props) => props.theme['red-500']};
  transition: 0.3s;

  &:not(:disabled):hover {
    background: ${(props) => props.theme['red-700']};
  }
`
