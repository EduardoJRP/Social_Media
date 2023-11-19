import "./sidebar.css";
import {Bookmark, Chat, Event, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, WorkOutline} from "@mui/icons-material";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

export default function SideBar() {
  return (
    <div className="sticky top-52 flex basis-3/12 overflow-y-scroll">
        <div className="p-5">
            <ul className="m-0 list-none p-0">
                <li className="mb-5 flex items-center">
                    <RssFeed className="mr-4"/>
                    <span>Feed</span>
                </li>
                <li className="mb-5 flex items-center">
                    <Chat className="mr-4"/>
                    <span>Chats</span>
                </li>
                <li className="mb-5 flex items-center">
                    <PlayCircleFilledOutlined className="mr-4"/>
                    <span>Videos</span>
                </li>
                <li className="mb-5 flex items-center">
                    <Group className="mr-4"/>
                    <span>Groups</span>
                </li>
                <li className="mb-5 flex items-center">
                    <Bookmark className="mr-4"/>
                    <span>Bookmarks</span>
                </li>
                <li className="mb-5 flex items-center">
                    <HelpOutline className="mr-4"/>
                    <span>Questions</span>
                </li>
                <li className="mb-5 flex items-center">
                    <WorkOutline className="mr-4"/>
                    <span>Jobs</span>
                </li>
                <li className="mb-5 flex items-center">
                    <Event className="mr-4"/>
                    <span>Events</span>
                </li>
                <li className="mb-5 flex items-center">
                    <School className="mr-4"/>
                    <span>Courses</span>
                </li>
            </ul>
            <button className="w-40 rounded-md border-none p-3 font-medium">Show More</button>
            <hr className="mx-0 my-5"/>
            <ul className="m-0 list-none p-0">
                {Users.map(u => (
                    <CloseFriend key={u.id} user={u}/>
                ))}
            </ul>
        </div>
    </div>
  )
}
