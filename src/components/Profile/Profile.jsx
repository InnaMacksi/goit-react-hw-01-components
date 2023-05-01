import { PropTypes} from "prop-types";
import { StyledContainer, StyledDescription, StyledAvatar, StyledName, StyledTag, StyledList,StyledItem, StyledLabel, StyledQuantity } from "./stylesProfile";
const Profile = ({user}) => {
    return (<StyledContainer>
        <StyledDescription>
            <StyledAvatar
                src={user.avatar}
                alt={user.username}
            />
            <StyledName>{user.username}</StyledName>
            <StyledTag>@{user.tag}</StyledTag>
            <StyledTag>{user.location}</StyledTag>
        </StyledDescription>

        <StyledList>
            <StyledItem>
                <StyledLabel>Followers</StyledLabel>
                <StyledQuantity>{user.stats.followers}</StyledQuantity>
            </StyledItem>
            <StyledItem>
                <StyledLabel>Views</StyledLabel>
                <StyledQuantity>{user.stats.views}</StyledQuantity>
            </StyledItem>
            <StyledItem>
                <StyledLabel>Likes</StyledLabel>
                <StyledQuantity>{user.stats.likes}</StyledQuantity>
            </StyledItem>
        </StyledList>
    </StyledContainer>);
};
Profile.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
    }).isRequired,
}
export default Profile;