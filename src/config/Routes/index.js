import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UploadImage from '../../pages/uploadImage'
import ListUpload from '../../pages/listUpload'

const RoutesAll = () => {
  return (
    // <div>test</div>
    <Router>
      <Routes>
        <Route path="/" element={<UploadImage/>}/>
        <Route path="/list" element={<ListUpload/>}/>
      </Routes>
    </Router>
  )
}

export default RoutesAll