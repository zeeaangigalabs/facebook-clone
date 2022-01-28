import React from 'react';
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Avatar,IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useStateValue } from './StateProvider'

function Header() {
    const [{user},dispatch] = useStateValue();
  return <div className="header">
      <div className='header__left'>
          <img 
          src='https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png'
          alt='facebook_logo'
           />
           <div className='header__input'>
               <SearchIcon/>
               <input placeholder='Search Facebook' type="text"/>
           </div>
      </div>
      <div className='header__center'>
      <div className='header__option
      header__option--active
      ' >
               <HomeIcon fontSize='large'/>
        </div>
        <div className='header__option'>
               <StorefrontIcon fontSize='large'/>
        </div>
        <div className='header__option'>
               <SubscriptionsIcon fontSize='large'/>
        </div>
        <div className='header__option'>
               <SupervisedUserCircleIcon fontSize='large'/>
        </div>

      </div>
      <div className='header__right'>
          <div className='header__info'>
              <Avatar src={user.photoURL}/>
              <h4>{user.displayName}</h4>
          </div>
          <IconButton>
              <AddIcon />
          </IconButton>
          <IconButton>
              <ForumIcon />
          </IconButton>
          <IconButton>
              <CircleNotificationsIcon />
          </IconButton>
          <IconButton>
              <ExpandMoreIcon />
          </IconButton>
      </div>

  </div>;
}

export default Header;
