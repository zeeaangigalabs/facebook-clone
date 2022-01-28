import React from 'react';
import "./Widgets.css"
function Widgets() {
  return <div className='widgets'>
      <iframe
      src='https://mui.com/components/material-icons/'
      width="340"
      height="100%"
      sytle={{border:"none",overflow:"hidden"}}
      scrolling="no"
      frameborder="0"
      allowTransparency="true"
      allow="encrypted-media">

      </iframe>
  </div>;
}

export default Widgets;
