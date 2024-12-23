import React, { useState } from 'react'
import './Navigator.css'

const Navigator = () => {

    const nameShort = 'WSM'
    const brandName = 'WAVING STRINGS MUSIC'

    const[navFirstLink] = useState('HOME')
    const[navSecondLink] = useState('PRODUCTS')
    const[navThirdLink] = useState('SERVICES')
    const[navFourthLink] = useState('CONTACTS')
    const[navFifthLink] = useState('ABOUT US')

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
                        <h6 className='offcanvas-title rounded p-2' id='offcanvasExampleLabel'>{brandName}</h6>
                        <i className='bx bx-chevron-right ms-auto fs-3 rounded' data-bs-dismiss='offcanvas' aria-label='Close'></i>
                    </div>
                    <div className='offcanvas-body'>
                        <div className='row gx-1 text-center'>

                            <div className='col-sm-12 mt-5 p-2'>
                                <a className='nav-link' href="#">{navFirstLink}</a>
                            </div>

                            <div className='col-sm-12 mt-4 p-2'>
                                <a className='nav-link' href="#">{navSecondLink}</a>
                            </div>

                            <div className='col-sm-12 mt-4 p-2'>
                                <a className='nav-link' href="#">{navThirdLink}</a>
                            </div>

                            <div className='col-sm-12 mt-4 p-2'>
                                <a className='nav-link' href="#">{navFourthLink}</a>
                            </div>

                            <div className='col-sm-12 mt-4 p-2'>
                                <a className='nav-link' href="#">{navFifthLink}</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navigator