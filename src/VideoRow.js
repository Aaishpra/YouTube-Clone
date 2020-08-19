import React from 'react';
import "./VideoRow.css";

function VideoRow({views,subs,description,channel,timestamp,title,image}) {
    return (
        <div className="videoRow">
          <img src={image} alt="" />
          <div className="videoRow__text">
             <h3>{title}</h3>
             <p>
                 {channel} * {subs} Subscribers {views} views * {timestamp}
             </p>
    <p>{description}</p>
              </div>  
        </div>
    )
}

export default VideoRow
