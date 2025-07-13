import React from 'react'
import Nav from './Nav'

const Addtodo = () => {
    return (
        <div>
            <Nav/>
            <h1 align="cnter">ADD TODO</h1>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className='form-label'>USERID</label>
                                <input type="" className='form-control' />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className='form-label'>ID</label>
                                <input type="" className='form-control' />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className='form-label'>TITLE</label>
                                <input type="" className='form-control' />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <br></br>
                                <br></br>
                                <label htmlFor="" className='form-label'>COMPLETED</label>
                                <input class="form-check-input" type="checkbox" value="" id="checkDefault"></input>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <br></br>
                                <button className="btn btn-success">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addtodo