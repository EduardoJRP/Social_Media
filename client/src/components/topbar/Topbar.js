import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topBarContainer">
        <div className="flex w-32 flex-1">
            <Link to="/" style={{textDecoration:"none"}}>
                <span className="logo">Connecting</span>
            </Link>
        </div>
        <div className="w-128 flex flex-1">
            <div className="searchBar">
                <Search className="searchIcon"/>
                <input placeholder="Search for friends, posts or videos" className="searchInput"/>
            </div>
        </div>
        <div className="w-128 flex items-center justify-around text-white">
            <div className="topBarLinks">
                <span className="mr-10 cursor-pointer text-sm">Homepage</span>
                <span className="mr-10 cursor-pointer text-sm">Timeline</span>
            </div>
            <div className="topBarIcons">
                <div className="topBarIconItem">
                    <Person />
                    <span className="topBarIconBadge">1</span>
                </div>
                <div className="topBarIconItem">
                    <Chat />
                    <span className="topBarIconBadge">1</span>
                </div>
                <div className="topBarIconItem">
                    <Notifications />
                    <span className="topBarIconBadge">1</span>
                </div>
            </div>
            <img src="/assets/person/person1.png" alt="MyImage" className="topBarImage"/>
        </div>
    </div>
  )
}
