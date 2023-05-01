import { PropTypes } from 'prop-types';
import { StyledTransactionsTitleColumn, StyledTransactionsRow } from "./../styledTransaction";

const Transactions = ({ item }) => {
  return (
    <StyledTransactionsRow>
      <StyledTransactionsTitleColumn>{item.type}</StyledTransactionsTitleColumn>
      <StyledTransactionsTitleColumn>{item.amount}</StyledTransactionsTitleColumn>
      <StyledTransactionsTitleColumn>{item.currency}</StyledTransactionsTitleColumn>
    </StyledTransactionsRow>
  );
};
export default Transactions;

Transactions.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
