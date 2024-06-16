import css from "./FriendListItem.module.css"
export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
    return (
        <div className={css.friendItem}>
            <img src={avatar} alt="Avatar" width="48" />
            <p>{name}</p>
            <p className={css.status}>
                {isOnline ? (
                <span className={css.isOnline}>Online</span>
                ) : (
                <span className={css.isOffline}>Offline</span>
                )}
            </p>
        </div>

    );
}