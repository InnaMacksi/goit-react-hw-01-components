import 'normalize.css';

import styled from 'styled-components';
export const StyledStatisticsList = styled.ul`
  display: flex;
  padding: 0;
  width: 400px;
  margin: 0;
  align-items: flex-start;
  list-style: none;
    border-radius: 5px;

  
`;
export const StyledStatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: 0;
  flex-grow: 1;
  padding: 15px;
  background-color: ${props => props.bgColor || 'gray'};
  
`;
export const StyledSectionStatistics = styled.section`
  margin-bottom: 30px;
  box-shadow: 1px 0px 20px 5px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
`;
export const StyledLabelStatistics = styled.span`
  color: #ffffff;
  font-size: 22px;
`;
export const StyledPercentageStatistics = styled.span`
  color: #ffffff;
`;
