import css from '../FriendList/FriendList.module.css';
import propTypes from 'prop-types';
import FriendListItem from '../FriendList/FriendListItem';

export default function FriendList(props) {
    const {friends} = props;

    return (
    <ul className={css.friendsList}>
        {friends.map(friend =>
            <FriendListItem
                key={friend.id}
                avatar={friend.avatar}
                isOnline={friend.isOnline}
                name={friend.name}
            />    
        )}
    </ul>
    );
}

FriendList.propTypes = {
    friends: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
            avatar: propTypes.string.isRequired,
            name: propTypes.string.isRequired,
            isOnline: propTypes.bool.isRequired,
        })
    ).isRequired
};