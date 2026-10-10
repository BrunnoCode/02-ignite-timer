import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;

  .task-field,
  .duration-field {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .task-field {
    flex: 1;
    min-width: 18rem;
  }

  .mobile-copy {
    display: none;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;

    .task-field {
      min-width: 0;
      flex-direction: column;
      align-items: stretch;
      gap: 0.375rem;
    }

    .duration-field {
      flex-direction: column;
      align-items: stretch;
      gap: 0.375rem;
    }

    .desktop-copy,
    .duration-suffix {
      display: none;
    }

    .mobile-copy {
      display: inline;
    }
  }
`
const baseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-100']};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`
export const TaskInput = styled(baseInput)`
  flex: 1;
  min-width: 0;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinuteAmountInput = styled(baseInput)`
  width: 4rem;

  @media (max-width: 767px) {
    width: 100%;
  }
`
