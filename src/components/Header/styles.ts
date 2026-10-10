import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;
  }

  a {
    display: flex;
    height: 3rem;
    width: 3rem;
    align-items: center;
    justify-content: center;

    color: ${(props) => props.theme['gray-100']};
    border-block: 3px solid transparent;
    transition: 0.2s;

    &:hover {
      border-bottom: 3px solid ${(props) => props.theme['green-500']};
    }

    &.active {
      color: ${(props) => props.theme['green-500']};
    }
  }

  @media (max-width: 767px) {
    img {
      width: 2.25rem;
      height: 2.25rem;
    }

    nav {
      gap: 0.25rem;
    }

    a {
      width: 2.75rem;
      height: 2.75rem;
    }
  }
`
