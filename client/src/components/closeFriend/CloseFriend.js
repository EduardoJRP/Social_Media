import "./closeFriend.css"

export default function CloseFriend({user}) {
  return (
    <li className="sideBarFriend">
        <img className="sideBarFriendImage" src={user.profilePicture} alt=""/>
        <spna className="sideBarFriendName">{user.username}</spna>
    </li>
  )
}
