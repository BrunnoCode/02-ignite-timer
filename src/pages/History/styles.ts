import styled from "styled-components";

export const HistoryContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 3.5rem;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme["gray-100"]};
  }
`;

export const HistoryList = styled.div`
  margin-top: 2rem;
  flex: 1;
  overflow: auto;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background: ${(props) => props.theme["gray-600"]};
      color: ${(props) => props.theme["gray-100"]};
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
      background-color: ${(props) => props.theme["gray-700"]};
      border-top: 4px solid ${(props) => props.theme["gray-800"]};
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
`;
