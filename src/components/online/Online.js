import "./online.css";

export default function Online({user}) {
  return (
    <li className="rightBarFriend">
        <div className="rightBarProfileImageContainer">
              <img className="rightBarProfileImage" src={user.profilePicture} alt=""/>
              <span className="rightBarOnline"></span>
        </div>
        <span className="rightBarUsername">{user.username}</span>
    </li>
  )
}
