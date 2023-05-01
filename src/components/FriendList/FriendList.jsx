import { PropTypes } from "prop-types"
import Item from "./Item/Item";
import { StyledFriendList } from "./stylesFriendList";
const FriendList = ({ friends }) => {
    return (
<StyledFriendList>
 {friends.map((item) => <Item item={item} key={item.id}/>)}</StyledFriendList>    )
}
export default FriendList;
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
};