import StatisticItems from "./StatisticItems/StatisticItems";
import { PropTypes } from "prop-types";
import { StyledStatisticsList, StyledSectionStatistics } from "./styledStatistic"
const Statistics = ({ stats, title }) => {
    return (
        <StyledSectionStatistics>
            {title && (<h2>Upload stats</h2>)}
            <StyledStatisticsList>
            {stats.map((stat) => <StatisticItems stats={stat} key={stat.id} />)}
            </StyledStatisticsList>
        </StyledSectionStatistics>);
};
export default Statistics;
Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
        title: PropTypes.string,
    })).isRequired,
    title: PropTypes.string
};