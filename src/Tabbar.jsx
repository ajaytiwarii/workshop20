
import React from 'react'
//import NotificationsIcon from '@material-ui/icons/Notifications';
import 'bootstrap/dist/css/bootstrap.css'
const Navbar = () => {
  return (
    <>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
          <li class="nav-item1 ">
              <img style = {{width:"50px", height:"50px", marginLeft:"30px" , marginRight:"50px"}} src= "https://static.vecteezy.com/system/resources/thumbnails/000/565/396/small/07022019-15.jpg"/>
            </li>
            <li class="nav-item active">
              <a   class="nav-link" href="#">PATIENTS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">CALENDER</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">USERS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">BILLING</a>
            </li>

          </ul>
          <ul class="navbar nav ms-md-auto">
          
            <li style = {{marginRight :"10px"}}   class="nav-item1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
              </svg>
            </li>
            <li style = {{marginRight :"20px"}} class="nav-item2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
              </svg>
            </li>
          </ul>

        </div>
      </nav>
    </>
  )
}
export default Navbar;