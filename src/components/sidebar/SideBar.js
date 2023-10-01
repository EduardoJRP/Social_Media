import "./sidebar.css";
import {RssFeed} from "@mui/icons-material"

export default function SideBar() {
  return (
    <div className="sideBar">
        <div className="sideBarWrapper">
            <ul className="sideBarList">
                <li className="sideBarListItem">
                    <RssFeed />
                    <span className="sideBarListItemText">Feed</span>
                </li>
                <li className="sideBarListItem">
                    <RssFeed />
                    <span className="sideBarListItemText">Feed</span>
                </li>
                <li className="sideBarListItem">
                    <RssFeed />
                    <span className="sideBarListItemText">Feed</span>
                </li>
                <li className="sideBarListItem">
                    <RssFeed />
                    <span className="sideBarListItemText">Feed</span>
                </li>
                <li className="sideBarListItem">
                    <RssFeed />
                    <span className="sideBarListItemText">Feed</span>
                </li>
                <li className="sideBarListItem">
                    <RssFeed />
                    <span className="sideBarListItemText">Feed</span>
                </li>
                <li className="sideBarListItem">
                    <RssFeed />
                    <span className="sideBarListItemText">Feed</span>
                </li>
                <li className="sideBarListItem">
                    <RssFeed />
                    <span className="sideBarListItemText">Feed</span>
                </li>
                <li className="sideBarListItem">
                    <RssFeed />
                    <span className="sideBarListItemText">Feed</span>
                </li>
            </ul>
            <button className="sideBarButton">Show More</button>
            <hr className="sideBarHr"/>
            <ul className="sideBarFriendList">
                <li className="sideBarFriend">
                    <img className="sideBarFriendImage" src="/assets/person/person2.png" alt=""/>
                    <spna className="sideBarFriendName">Someone</spna>
                </li>
                <li className="sideBarFriend">
                    <img className="sideBarFriendImage" src="/assets/person/person2.png" alt=""/>
                    <spna className="sideBarFriendName">Someone</spna>
                </li>
                <li className="sideBarFriend">
                    <img className="sideBarFriendImage" src="/assets/person/person2.png" alt=""/>
                    <spna className="sideBarFriendName">Someone</spna>
                </li>
                <li className="sideBarFriend">
                    <img className="sideBarFriendImage" src="/assets/person/person2.png" alt=""/>
                    <spna className="sideBarFriendName">Someone</spna>
                </li>
                <li className="sideBarFriend">
                    <img className="sideBarFriendImage" src="/assets/person/person2.png" alt=""/>
                    <spna className="sideBarFriendName">Someone</spna>
                </li>
                <li className="sideBarFriend">
                    <img className="sideBarFriendImage" src="/assets/person/person2.png" alt=""/>
                    <spna className="sideBarFriendName">Someone</spna>
                </li>
            </ul>
        </div>
    </div>
  )
}
