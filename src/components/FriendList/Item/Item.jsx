import { PropTypes } from "prop-types"
import { StyledFriendsItem, StyledCircle, StyledFriendsAvatar, StyledFriendsName } from "../stylesFriendList";
const Item = ({ item }) => {
    return (
        <StyledFriendsItem>
            <span ><StyledCircle isOnline={item.isOnline}></StyledCircle>{item.isOnline}</span>
            <StyledFriendsAvatar src={item.avatar} alt={item.name} width="80" />
            <StyledFriendsName >{item.name}</StyledFriendsName>
        </StyledFriendsItem>);
};
Item.propTypes = {
  item: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
  }).isRequired
}
export default Item;