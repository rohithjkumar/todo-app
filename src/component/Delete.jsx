import React from 'react'
import Nav from './Nav'

export const Delete = () => {
  return (
    <div>
        <Nav/>
        <h1 align="center">DELETE TODO</h1>
        <div className="container">
            <div className="row">
                <div className="col">
                <row>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className='form-label'>Title</label>
                        <input type="text" className='form-control'/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <br></br>
                        <button className="btn btn-danger">DELETE</button>
                    </div>
                </row>
                </div>
            </div>
        </div>
    </div>
  )
}
