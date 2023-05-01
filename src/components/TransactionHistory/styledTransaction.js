import 'normalize.css';

import styled from 'styled-components';
export const StyledTransactionsTable = styled.table`
  width: 400px;
  margin: 0 auto 10px;

  box-shadow: 1px 0px 20px 5px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
`;
export const StyledTransactionsTitleBox = styled.tr`
  color: #f3f3f3;
`;
export const StyledTransactionsTitleRow = styled.th`
font-weight: bold;
    text-align: left;
    border: none;
    padding: 10px 15px;
    background: #66CCCC;
    font-size: 14px;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    `;
export const StyledTransactionsTitleColumn = styled.td`
text-align: left;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    padding: 10px 15px;
    font-size: 14px;
    vertical-align: top;
    `;
export const StyledTransactionsRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;