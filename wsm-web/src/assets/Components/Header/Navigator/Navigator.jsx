import React from 'react'
import './Navigator.css'

const Navigator = () => {
    const nameShort = 'WSM'
  return (
    <div>
        <nav className='navbar navbar-expand-xxl fixed-top'>
            <div className='container-fluid'>
                <h6 className='pb-3 p-1'>{nameShort}</h6>

                <ul className='list-unstyled ms-auto d-flex'>
                    <li className='nav-item'>
                        <i className='bx bx-search'></i>
                    </li>
                    <li className='nav-item'>
                        <i className='bx bx-menu-alt-right'></i>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navigator