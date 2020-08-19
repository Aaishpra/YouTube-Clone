import React from 'react'
import "./SearchPage.css";
import ChannelRow from './ChannelRow';
import TuneOutlinedIcon from'@material-ui/icons/TuneOutlined';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className="searchPage">
          <div className="searchPage__filter">
             <TuneOutlinedIcon /> 
             <h2>Filter</h2>
              </div> 
              <hr /> 
              <ChannelRow
              image="https://avatars3.githubusercontent.com/u/66299533?s=460&u=0fb3a5df47177ce99053dc2c58b65987be47e6dc&v=4"
              channel="Beauty with Auora Kim"
              verified
              subs="789k"
              noOfVideos={589}
              description="Anneghasayo guys I am Aura Kim Beauty Youtuber, learn beauty tips and tricks with me" 
              />
              <hr/>
              <VideoRow 
              title="Coding Decoding | Lecture-04"
              subs="660k"
              views="234k"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQG-5hkEn7j3A328Wl8qsiDnv6T3ND6RnDqJQ&usqp=CAU"
              channel="VivekSir"
              description="lorem23 jksdkhfk uidfndsm ihkdv idfndsv dfdsfsd dfdsfs"
              timestamp="6 months ago"
  
              />
        </div>
    )
}

export default SearchPage
