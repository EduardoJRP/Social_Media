import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online"

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
          {Users.map(u => (
            <Online key={u.id} user={u}/>
          ))}
        </ul>
      </div>
    </div>
  )
}
