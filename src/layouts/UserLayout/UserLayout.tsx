/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'

import './UserLayout.css'
// import Header from '../MainUserLayout/components/Header'
// import Footer from '../MainUserLayout/components/Footer'

const UserLayout: React.FC<any> = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      <div className='main'>
        <div className='content'>{children}</div>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default UserLayout
