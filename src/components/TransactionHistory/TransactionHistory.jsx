import Transactions from "./Transactions/Transactions";
import { PropTypes } from "prop-types";
import { StyledTransactionsTable, StyledTransactionsTitleBox, StyledTransactionsTitleRow } from "./styledTransaction";
const TransactionHistory = ({ items }) => {
    return (
        <StyledTransactionsTable>
            <thead>
                <StyledTransactionsTitleBox>
                    <StyledTransactionsTitleRow>Type</StyledTransactionsTitleRow>
                    <StyledTransactionsTitleRow>Amount</StyledTransactionsTitleRow>
                    <StyledTransactionsTitleRow>Currency</StyledTransactionsTitleRow>
                </StyledTransactionsTitleBox>
            </thead>
            <tbody>
 {items.map((item) => <Transactions item={item} key={item.id}/>)}
            </tbody>
        </StyledTransactionsTable>);
};

export default TransactionHistory;
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
}