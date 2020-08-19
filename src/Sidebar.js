import React from 'react';
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home'
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIconOutlined from '@material-ui/icons/ThumbUpOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./Sidebar.css";


function Sidebar() {
    return (
        <div className="sidebar">
           {/* <h2>I am  sidebar</h2>  */}

           <SidebarRow selected Icon={HomeIcon} title="Home" />
           <SidebarRow Icon={WhatshotIcon} title="Trending" />
           <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
           <hr />
           <SidebarRow Icon={VideoLibraryIcon} title="Library" />
           <SidebarRow Icon={HistoryIcon} title="History" />
           <SidebarRow Icon={OndemandVideoIcon} title="Your Videos" />
           <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
           <SidebarRow Icon={ThumbUpIconOutlined} title="Liked Videos" />
           <SidebarRow Icon={ExpandMoreIcon} title="Show More" />
           <hr />
        </div>
    );
}

export default Sidebar

