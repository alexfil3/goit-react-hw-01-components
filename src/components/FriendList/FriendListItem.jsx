import PropTypes from 'prop-types';
import css from './FriendList.module.css'

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <>
            <span className={css.status}
                style={{
                    backgroundColor: isOnline ? 'green' : 'red'
                }}
            ></span>
            <img className='avatar' src={avatar} alt="User avatar" width="68" />
            <p className='name'>{name}</p>
        </>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}