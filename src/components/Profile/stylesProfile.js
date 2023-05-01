import 'normalize.css';

import styled from 'styled-components';
export const StyledContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  box-shadow: 1px 0px 20px 5px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
margin-bottom: 30px;
`;
export const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`;
export const StyledAvatar = styled.img`
  border-radius: 50%;
  width: 150px;
  margin-bottom: 20px;

  background-color: lightgrey;
`;
export const StyledName = styled.p`
  font-size: 24px;
  line-height: 1.26;
  font-weight: bold;

  margin-bottom: 10px;
`;
export const StyledTag = styled.p`
  font-size: 16px;
  line-height: 1.22;

  color: gray;

  margin-bottom: 10px;
`;
export const StyledList = styled.ul`
  display: flex;
  border-top: 1px solid #514f5d85;
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StyledLabel = styled.span`
  display: block;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: bold;
  color: gray;
`;
export const StyledQuantity = styled.span`
  padding: 30px 10px;
  width: 113px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #66CCCC;
  
  font-size: 16px;
  font-weight: bold;
`;
