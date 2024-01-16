import "./closeFriend.css"

export default function CloseFriend({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="sideBarFriend">
        <img className="sideBarFriendImage" src={PF+user.profilePicture} alt=""/>
        <spna className="sideBarFriendName">{user.username}</spna>
    </li>
  )
}
