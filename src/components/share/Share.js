import './share.css';
import { PermMedia } from "@mui/material" 

export default function Share() {
  return (
    <div className='share'>
        <div className='shareWrapper'>
            <div className='shareTop'>
                <img className="shareProfileImage" src="/assets/person/person1.png" alt=''/>
                <input placeholder="What's in your mind -name-?" className='shareInput'/>
            </div>
            <hr className='shareHr'/>
            <div className='shareBottom'>
                <div className='shareOptions'>
                    <div className='shareOption'>
                        <PermMedia />
                        <span className='shareOptionText'>Photo or Video</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
