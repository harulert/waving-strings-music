import React from 'react'
import './Navigator.css'

const Navigator = () => {
    const nameShort = 'WSM'
    const brandName = 'WAVING STRINGS MUSIC'
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
                        <i className='bx bx-menu-alt-right' data-bs-toggle='offcanvas' data-bs-target='#menuNavbar' aria-controls='offcanvasExample'></i>
                    </li>
                </ul>

                <div class='offcanvas offcanvas-end' tabindex={-1} id='menuNavbar' aria-labelledby='offcanvasExampleLabel'>
                    <div className='offcanvas-header'>
                        <h6 className='offcanvas-title' id='offcanvasExampleLabel'>{brandName}</h6>
                        <i className='bx bx-chevron-right ms-auto fs-3' data-bs-dismiss='offcanvas' aria-label='Close'></i>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navigator