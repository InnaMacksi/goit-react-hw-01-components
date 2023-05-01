import { PropTypes } from 'prop-types';
import {
  StyledStatisticsItem,
  StyledLabelStatistics,
  StyledPercentageStatistics,
} from '../styledStatistic';
const StatisticItems = ({ stats }) => {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return (
    <StyledStatisticsItem bgColor={randomColor}>
      <StyledLabelStatistics>{stats.label}</StyledLabelStatistics>
      <StyledPercentageStatistics>
        {stats.percentage}
      </StyledPercentageStatistics>
    </StyledStatisticsItem>
  );
};
export default StatisticItems;
StatisticItems.propTypes = {
  stats: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    title: PropTypes.string,
  }).isRequired,
};
