import 'normalize.css';

import styled from 'styled-components';
export const StyledFriendList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 380px;
  margin: 0;
  padding: 0;
  align-items: flex-start;
  list-style: none;
    margin-bottom: 30px;

`;
export const StyledFriendsItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  padding-right: 0;

  box-shadow: 1px 0px 20px 5px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
`;
export const StyledCircle = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  ${({ isOnline }) =>
    isOnline ? 'background-color: green;' : 'background-color: red;'}
  box-shadow: ${({ isOnline }) =>
    isOnline
      ? '0px 0px 3px 3px rgba(0, 255, 0, 0.5)'
      : '0px 0px 3px 3px rgba(255, 0, 0, 0.5)'};
  margin-right: 15px;
`;
export const StyledFriendsAvatar = styled.img`
  border-radius: 5px;
  border: 1px solid lightgrey;
  box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.3);
`;
export const StyledFriendsName = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-left: 15px;
`;
