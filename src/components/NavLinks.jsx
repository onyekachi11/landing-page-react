import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CalenderImg from '../assets/images/icon-calendar.svg'
import PlanImg from '../assets/images/icon-planning.svg'
import BellImg from '../assets/images/icon-reminders.svg'
import TodoImg from '../assets/images/icon-todo.svg'

const NavLinks = () => {

  const [isLinkOpen,setIsLinkOpen] = useState(false)
  const [isLinkOpen2,setIsLinkOpen2] = useState(false)

  const setToggle =()=>{
    setIsLinkOpen(!isLinkOpen)
  }
  const setToggleTwo =()=>{
    setIsLinkOpen2(!isLinkOpen2)
  }

  return (
    <nav>
      <ul>

      <li>
        <Link onClick={()=>{
          setToggle()
          setIsLinkOpen2(false)
          }}>Features
        </Link>
        <div
        className={`${isLinkOpen ? 'sublink':'sublink show '}`}
        >
            <Link>
            <div className='nav-emoji'>
              <img src={TodoImg} alt="" />
            </div>
            Todo List</Link>
            <Link>
             <div  className='nav-emoji'>
              <img src={CalenderImg} alt="" />
            </div>
            Calendar</Link>
            <Link>
             <div  className='nav-emoji'>
              <img src={BellImg} alt="" />
            </div>
            Reminders</Link>
            <Link>
             <div  className='nav-emoji'>
              <img src={PlanImg} alt="" />
            </div>
            Planning</Link>
        </div>
      </li>
      
      <li>
        <Link onClick={()=>{
          setToggleTwo()
          setIsLinkOpen(false)
        }}>Company</Link>
        <div className={`${isLinkOpen2 ? 'sublink':'sublink show'}`}>
            <Link>History</Link>
            <Link>Our Team</Link>
            <Link>blog</Link>
        </div>
      </li>

      <li>
        <Link to='/' onClick={()=>{
          setIsLinkOpen(false)
          setIsLinkOpen2(false)
        }}>Careers</Link>
      </li>

      <li>
        <Link to='/' onClick={()=>{
          setIsLinkOpen(false)
          setIsLinkOpen2(false)
        }}>About</Link>
      </li>

      </ul>
    </nav>
  )
}

export default NavLinks
