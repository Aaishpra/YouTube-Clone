import React,{ useState } from 'react'
import "./Header.css";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from "@material-ui/core/Avatar"
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");
    return (
        <div className="header">
        <div className="header_left">

        <MenuIcon />
      <Link to="/">
        <img 
      className="header_logo"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVsAAACRCAMAAABaFeu5AAAAulBMVEX////NIB8AAADKAADMFxbNHRzWXFv23NzMCQYmJibkl5Z2dnasrKzj4+PQLCvvyMjLDw07OzsICAi0tLTOJST19fWWlpbghobuwcFmZmaioqLabm5RUVHnp6ffgoHpsLDmoKCMjIz66enz0tJ/f3/v7+/88fHrtLTIyMjz0dHTS0rQMTC/v7/VU1Lcc3PROzrW1tZHR0fZYWAwMDBsbGzc3Nzijo7SPz/denoTExN6enodHR1dXV01NTWLxe1wAAAOZUlEQVR4nO2d62LaOBCFSWWDl6bBbSFh43IpJFAgQEpboLf3f621wRcdaSRjwLGV5fxqbWHjL0LWjGZGlcrrUqs18jUYDGq14XAyaTQa7UBjX71eB9XrBYd35/12k8lwWKvVBoPgAq1W0Q9SmEYBu0Z73Ov06+vtwltV59PNcnZzZblMLydSSjvXurqZLTfTeXXlLbbrer/TG7cbO/RFP/z5NRi2e/W7rTed2cjKdV0rkL3T1bm0v9zuyv4d8G9hzabe9q7eaU8GpvfvYd9b7kEGGM/I73juAfA97uWqPyka0LGaLHymVvE8VbItn7HXLhrTEerNmFterrFcdtMpGlVGtZvMALA72cwaF40rg0ZVY8gGstncmCnExHWLxpVRFjNk2O0Z1Wn3slm/aGyHqM+KBnWU2LpocOkyFK0JcNumovXh9oqGp9fAwLE2FhsUjU+rqmkzBF7WtGh8Ohk8IgRiZTYiNlbReE6SfVM0QLUM77al7rhTs7ut33E3RSNUqWZ6t/U77rBoiAqtTZ4k7OVui4aoUNPguW0o2y0aIq2h+UOCPyg09g/TAlGPm97ijIIhIVgGPFRZnt3mP5jD7yQaFN6APstPe40tcoY74x7Vmt91Kd1RygDXXq6Tz62X54dr2/uH+Qzk3stP+wca/Jsv2hE/JLAsi1AZxhJrxX+wmsOcj9V2l37GbvkofWk8//EkdKkaA9t+hk9mYVvlP5gL29AbhuyexO8ssM95SOjyP21z2bre/to4KDyI3/kWTn86BdwB2vCDn7ls7dn+2tgx/xG/8yc4fX0KuHTBcGsw2ysWrvl+AHrvhO+cNhyfVcNXwzac4f7S9cwvcJKYRpxV41fDNpziID5hkoWj8f1p6FJVd+AL9jN8tFxs3WhNEn/2+JW/aQeMcwumCUazXYRX/w78fvA3foRTv09El6oVPKfBbONVsyf17x5PERbxeYX2p8FsI6tXGBRgCvsWTj2fRi4roNxs3vzZXrHo8ugy4G/8kz/x80RyWQG5230mSCRoOmqjysY2Cmr8CGy/JPd9Byckm+3cGgiAhMwQaFsTsj8yPPeLsK2Fl8c3Fjeqon/xSyVn6dfKnAxttXoRtvGa2Vce4bfkvurBIhc1XhHbeAS7B4aJYQuHv+eNVjDLRJnFNn4P46AQ+xmf6cO5SR8aahRbpx/f4C8P8W10FP2L+eepockrfV1oW3K27l18A6AYm1/gX/yTN1nR5BVlFFvLi2/wA3po5DaAgzmv5gRaaR8zf7YHpq0e0syaJ3f4zWMM/YzoIKNct4/Pz88/zufT1YeC6djavNIO02xtf4683Cwtpv3xWEE+b/OmaQXpmpp2NheG+0D8/MG/+FUE8fQ2HqS/fqanvrdfP8X6mrwK33GHP/FDzUbbGzRs7Sb3nyQyx25yx5N/Umxttuzsp/u1LlNBsx1W7U9GwYtnNGr0p5qkzWhVJxBOCfbH/uEPoeu2hX7dN28+3BJswRuRON3B2uN9a7Mj2fIPUuEs58j7v1f8piTYsiVnUY/m9HjD7D6m5w3Wyk5uN7l2QGrnlMGJGfzyhXiQveQB+RC2/AKdPhZMwxbDiTOztVkdv7hHwLWpHJzRVpWbwceEAYddJwQvw1/+iujwjSXFhWRkO9LHD+XG1mJSmr488rvNmthop7YCLuO6OLy4vtK0Q+HSLydxOS0rW/2rPye2c7cpp9aIXqMrd6Oa3g/oHsGzbQGl4EIwdeBWI/5VoZVeeBnZSg/0MmwtKsd5jWaMpYkFp+FCLhQg+6J+46DvQRC6IY1gOyUTwvA3ZDd1OeZkXCvjhxAYXj8L76vE74guXUmwNJGRbYo5kBNbRa4d2DGMHmsjUX4QCMyHQeG34F9MkCkH272+8ffMyDYlrjkntgrxPjknLUuXSNvCewO1R5yUxY3QOCbEe8systW7b1+YLTdA2U6am4r45nhvGASeAOIvGhclfikzI9uUNa+XZVtJChCldlvKosRCFfDIv4B0YtIKJB+urx8wnow3Moxh275beYLNxQ24QvrzZO2tFkLrnvTVhSIg77lH/gsjRNwE3TfhSgTav5x5lpGtftkhP7Zjm7lBRTx8YcVR/kIunsccK2gN7OSpuZAdia5wTonBRbtvwE7jln7MYOuFlpW1hMNxV3TAII7mBDaDnisZckIhBeV7KumKsGgZ2xNodxjGdpU0B9M3fj/h4XgYRh+ElHIoBq6o2CavSX5sVa0HJ62NYJv4xrGDxjdg5FHwfhPvCkdgKzoOQyWvfnCNcTYY2GrJXDgjW/mF8LJsuXWYSjIJs2GoSP7+Nnwfye4R2eKbiqACXl7OowsheckIYhpbKNkxcijineS20J+ll5nIVjEoJLMqYMhFmMMfJWFuGFvsoaNwZOVWbCuwFI0vsythhiuxJR2znOcQfA4qtok70jS2uHwRrrDhS4lnC9Necc1EYovhtlI/xHFVNSYk47BpbPEyYU/EiaqSrTgJk9iSgwIXiA8zYM5dDv05Dh0xnG24woRGgpKtGOYgs8Xgup34xUKYSKjYJsbD/4mtGFshs8VI3J34QPyD2CZW3OtgS19EZOulssW13Z14b/eF7Qls0agNBLk5F7Z1J47TycxWWg2DFbAL2zWzImVmKy2HQTTSha1SB7DFQKU3QiD+ha1Sh7AV/DXf1ScvbHkdwlao84GB+Be2Sh3CFtP1hED8C1ulDmLLr5q9+YDnLmyVurD937Itek3nwjZU2dmSSfQXtqFOZEttRnBhG4pk2/NoLcSyjmRl7OLYFhOzlNWfoKhjKgaEkRsXXdjq2OrTYsvLtpgY0bzYUsN0cWwnF7a5sS0mJj8vttT2p8WxLSaXJC+2VIrEhe2hbF2HkzRPKBfbYnL3jmbr1vuJOmJUPrnXVoFs9fXYy8YW48HE+AQ8G6o4tlK8WsnZamM/GJXbczLbo+NqKjelZHtUzFJSkJGXji3Eg3GxdueJB6vot1ooN9u5wBZjIkPp2N7TsDBGNAlyysr22Joq+cSInhTHSG+0pWObb/zt0bWATsxDV/AI42+5Sl8VjBsHtsJvDrMhIunYQpytKv726LjxyvbIGlZnYos84rjxLn+UW3fCmYBQswT3PomkYwtZUqp3WbLsrmALozbPtn5etrYNT5/K1oXMhjjfAShNVGwtZEvvYaZjC4lkXOYuVGlKyljQbDFjhWfbP7KunYKtsP9dKlv89cd5Olf80cS+sS36eHgtoQLOXjq2GNGUHP5JH4bdDSK2Qhgqz1a/0JuVrbiqoqpNkeTtwt8itsAVcy3smaK9Ttec1rKF4iDxwPqkgPVAtG5hbAmwPbZGKxSMitiKtZNUbIdRDTVM00l+/ThRiIs8oMNA9OvTm51q2WLxqncULi6oFEyNfZG1dwJaYHtsbWH8eVZWrn9E7jiqfN7RnPmDpf8JHEJiWjgMV+pha7y+mHNKr2Bq2Qo/6F2anpDcwwWV3oqNW3I6Ns9W7wjTsMUNGgdL5qxkN5Q6x7+xumJsKuxOGhdKwQRIH/rUZe5cYCemQNFVWLRs8ayv91KgOddYCJT+IMafimxbR7KVHCMjylGirU0hfyKZEErL4a2R6CyQfnH0lvN6tmQGGi8+9USRw6pkq99IQMdWX6tnr4x1P6Yqe42SJ6Whk830bIVNYGTxf9GUmkwyW21BRh1balFVVEa23PXJOA7ll9n9OehtZFPYPqsg7YUlMRVtlGy1dX41bOnZZKV2iF2mqPzFL4zajq48WEVy1EhzjkgpbFWFAPYSCtuRBa8+wgsR2GqNXg1b2nofHWTzejQ3+CquvqfL9cEweT1WGlsqdzLST2GMp+qNXqv9CfqVPl1tYcrLP2oe5gcju5hgZ7Eu1SgUMS3H5PVYqWzlHLQYrVjCuSW3+ajx1egjwrRsZTNo0LQOrKkyrcgSS59TBVpDDYlKooptltLZqmq0vpeXMaT5bDD7VbPVRn9oa2Kj9RCc982tw9ha7kzq9XJXZAuxTSiySKvi5XoAWyrtV7EDF86H/+46tpqtdqVXW8tdMJ4qneCJD/WNW46AokbwcpaCcbFXl/zK9PRWmGSRTfwfO7gKAv1R7MnHDyChVxLY4uZSukmYvk4+410ng+ru7IH9NihI5fEwxmS9YL+RNI3u2OQbAn1nia7vedFtfLXuuS757bN6t8Pr0Br7fRsNGY/8DXDvT2kOzsnq8JKLRm0ikrVtWI3dveM/Ea9q2JtxL9Z4H1jgsm3ULRtzZZ1rNu8keEeNrqNoSXvGs+jx6fbh7duH26eUXQh+PN3fPx221WRHNyjAnlryH8FiTa/ery9uknOwSRe3jwN/2I7b2vPuuju3lGXyd/dg9sbrrtfb+Yypy+SjJ7gkOmFHjICZ5TiOvmi5/uOu61ppH7d3zfTtGDk0F63jyZRINu1NKFr65UhDpLDKilaWfR9LK3rRoXi9hkGBjLMrgRbmDwqnz8ByUkpCiQk6yJtciPSb6hgg2bdRGmnNBxOUaavxF1bq7L3cssv6JgtkeMeVYk5KJf0WcSWXEONTNqXkR5Zb5Z0k7LU2F652Ya0UWpkK1yEXnMulqplwHWpZs3RamAiXldXYFdTXuf9LKZvRQQklVG2mWrYqp9yyzxBAHcscuhZblNgco9SZabbFLo9sl1UPiVItmSZd3XpqGWQ57OrOQLI71XrdZbDY7biWXRbItm1blusEX2teL+WibgYNhuP+dr5pxmEFzm4h29pVVX8RkL6cJNZhtpmvuv3eRLEDrZFqjQa1Rrvd69fX3e1iNd8sb2yH0QpKnYSV0SydwjZBc/I61s1yuvK23XW9M243JrWBlO7wuuUzHwxqvoaNRns87vU6naDUSX191/X/Bp63WlWr1fl8ymk+n/vHVivPW2y33bt1PaiR0un0xuN2uzH0LzUYkDkpFxWv/wD/X4cAmLuiGAAAAABJRU5ErkJggg=="
      alt="" />
      </Link>
      </div>
      <div className="header_input">
      <input 
       onChange={e => setInputSearch(e.target.value)}
       value={inputSearch} 
       type="text" 
       placeholder="Search" />
      <Link to={`/search/${inputSearch}`}>
      <SearchIcon className="header_inputButton"/>
      </Link>
      </div>
      <div className="header_icons">
        <VideoCallIcon className="header_icon" />
        <AppsIcon className="header_icon"/>
        <NotificationsIcon className="header_icon"/>
        <Avatar 
         alt="Shipra Verma"
         src="https://avatars3.githubusercontent.com/u/66299533?s=460&u=0fb3a5df47177ce99053dc2c58b65987be47e6dc&v=4"
         />
         </div>
        </div>
        
    );
}

export default Header
