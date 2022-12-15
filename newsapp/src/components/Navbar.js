import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = (props) => {
  let time = new Date().toLocaleTimeString()
  const [times, setTimes] = useState(time)
  

  // render() {
    const updateTime = () =>{
      time = new Date().toLocaleTimeString()
      setTimes(time)
    }
    setInterval(updateTime, 1000)
    return (
      <>
       <nav id='keyfram'  className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">NewsMonkey</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                    </li>
                    {/* <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li> */}
                    <li className="nav-item" type="button"><Link className="nav-link" to="/business">Business</Link></li>
                    <li className="nav-item" type="button"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                    <li className="nav-item" type="button"><Link className="nav-link" to="/general">General</Link></li>
                    <li className="nav-item" type="button"><Link className="nav-link" to="/health">Health</Link></li>
                    <li className="nav-item" type="button"><Link className="nav-link" to="/science">Science</Link></li>
                    <li className="nav-item" type="button"><Link className="nav-link" to="/sports">Sports</Link></li>
                    <li className="nav-item" type="button"><Link className="nav-link" to="/technology">Technology</Link></li>
                </ul>
                </div>
                <div className='abc'>
                <div id='keyfram' onClick={props.toggleMode}>
                    <div className="form-check form-switch px-4">
                      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    </div>
                  </div>
                  <br />
                <motion.div 
                // initial={{ scale: 0 }}animate={{ rotate: 360, scale: 1 }}transition={{type: "spring",stiffness: 260,damping: 20}}
                  whileHover={{ scale: 1.2, rotate: 360 }}whileTap={{scale: 0.8,rotate: -90,borderRadius: "100%"}}
                  initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay:0.1, duration: 5}}
                  className=' text-white Cursor'>
                  <button>{times}</button>
                </motion.div>
                </div>
            </div>
            </nav> 
      </>
    )
  // }
}

export default Navbar
