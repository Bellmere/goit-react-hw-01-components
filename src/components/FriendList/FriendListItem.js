import propTypes from 'prop-types';
import css from '../FriendList/FriendList.module.css';

export default function FriendListItem(props) {
    const {avatar, name, isOnline} = props;
    return (
        <li className={css.item}>
        <span className={isOnline? css.online : css.offline}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
        </li>
    );
}

FriendListItem.propTypes = {
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    isOnline: propTypes.bool.isRequired,
};