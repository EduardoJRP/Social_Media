import "./rightbar.css"

export default function RightBar() {
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImage" src="/assets/gift.png" alt=""/>
          <span className="birthdayText"><b>Someone</b> and <b>3 other friends</b> have a birthday today</span>
        </div>
        <h4 className="rightBarTitle">Online Friends</h4>
        <ul className="rightBarFriendList">
          <li className="rightBarFriend">
            <div className="rightBarProfileImageContainer">
              <img className="rightBarProfileImage" src="/assets/person/person3.png" alt=""/>
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUsername">Someone</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
