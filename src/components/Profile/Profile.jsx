import css from "./Profile.module.css"

export default function Profile({ name, tag, location, image, stats: { followers, views, likes },
}) {
    
    return <div className={css.container}>
  <div className={css.box}>
    <img
     className={css.userImage}
     src= {image}
     alt="User avatar"
    />
    <p className={css.ProfileName}>{name}</p>
    <p className={css.ProfileTag}>{tag}</p>
    <p className={css.ProfileLocation}>{location}</p>
  </div>

  <ul className={css.profileList}>
        <li className={css.ProfileListItem}>
            <span className={css.statsTitle}>Followers</span>
            <span className={css.statsBold}>{followers}</span>
          </li >
          <li className={css.ProfileListItem}>
            <span className={css.statsTitle}>Views</span>
            <span className={css.statsBold}>{views}</span>
          </li>
          <li className={css.ProfileListItem}>
            <span className={css.statsTitle}>Likes</span>
            <span className={css.statsBold}>{likes}</span>
          </li>
      </ul>
</div>

}









