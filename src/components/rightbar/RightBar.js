import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online"

export default function RightBar({profile}) {
  const HomeRightBar = () => {
    return(
      <>
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
        </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightBarTitle">User Information</h4>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">City:</span>
            <span className="rightBarInfoKey">New York</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From:</span>
            <span className="rightBarInfoKey">Colombia</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Relationship:</span>
            <span className="rightBarInfoKey">Single</span>
          </div>
        </div>
        <h4 className="rightBarTitle">User Friends</h4>
        <div className="rightBarFollowings">
          <div className="rightBarFollowing">
            <img className="rightBarFollowingImage" src="assets/person/person1.png" alt=""/>
            <span className="rightBarFollowingName">Someone</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        {profile ? <ProfileRightBar/> : <HomeRightBar/>}
      </div>
    </div>
  )
}
