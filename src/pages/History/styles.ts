import styled from 'styled-components'

export const HistoryContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 3.5rem;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-100']};
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 3rem 1rem;
  }

  @media (max-width: 767px) {
    padding: 2.5rem 0 0;

    h1 {
      font-size: 1.25rem;
    }
  }
`

export const HistoryList = styled.div`
  margin-top: 2rem;
  flex: 1;
  overflow: auto;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background: ${(props) => props.theme['gray-600']};
      color: ${(props) => props.theme['gray-100']};
      padding: 1rem;
      text-align: left;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }
      &:last-child {
        border-top-right-radius: 8px;
        padding-left: 1.5rem;
      }
    }

    td {
      background-color: ${(props) => props.theme['gray-700']};
      border-top: 4px solid ${(props) => props.theme['gray-800']};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }
      &:last-child {
        padding-left: 1.5rem;
      }
    }
  }

  @media (max-width: 767px) {
    margin-top: 1.5rem;
    overflow: visible;

    table {
      display: none;
    }
  }
`

export const MobileHistoryList = styled.dl`
  display: none;

  @media (max-width: 767px) {
    display: grid;
    gap: 1rem;
  }
`

export const HistoryCard = styled.div`
  display: grid;
  gap: 0.875rem;
  padding: 1rem;
  border-radius: 8px;
  background: ${(props) => props.theme['gray-700']};

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  dt {
    color: ${(props) => props.theme['gray-400']};
    font-size: 0.75rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  dd {
    color: ${(props) => props.theme['gray-100']};
    font-size: 0.875rem;
    margin: 0;
    text-align: right;
    overflow-wrap: anywhere;
  }
`

const STATUS_COLOR = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500',
} as const

interface statusProps {
  statusColor: keyof typeof STATUS_COLOR
}

export const Status = styled.span<statusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${(props) =>
      props.theme[STATUS_COLOR[props.statusColor]]};
  }
`
