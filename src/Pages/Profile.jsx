import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


function Profile() {
    return (
        <>
            <section className='profile_sec'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xxl-7 col-xl-7 col-lg-8 col-md-12 col-sm-12 " style={{ margin: 'auto' }}>
                            <div className="profile_sec_box">
                                <div className="profile_img">
                                    <div className="profile_img_edit">
                                        <i className='fa fa-edit'>
                                            <input type="file" style={{ display: 'none' }} />
                                        </i>
                                    </div>
                                    <img src="https://sisgain.com/project/astrodevam/assets/img/card2.png" alt="" />
                                </div>
                                <form action="" method="post">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label htmlFor="">Enter First Name</label>
                                                <input type="text" name="" placeholder='Enter First Name' className='form-control' id="" />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="">Phone Number</label>
                                                <input type="number" name="" placeholder='Enter Number' className='form-control' id="" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="">Date of Birth</label>
                                                <input type="date" name="" className='form-control' id="" />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="">City, State, Country</label>
                                                <input type="text" name="" className='form-control' id="" />
                                            </div>

                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label htmlFor="">Enter Last Name</label>
                                                <input type="text" name="" placeholder='Enter Last Name' className='form-control' id="" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="">Email</label>
                                                <input type="email" name="" placeholder='Enter Email' className='form-control' id="" />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="">Time of Birth</label>
                                                <input type="time" name="" className='form-control' id="" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="">Pincode</label>
                                                <input type="number" name="" placeholder='Enter Number' className='form-control' id="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <button type='submit' className='w-100 btn btn-success'>Submit</button>
                                        </div>

                                        <div className="col-md-6">
                                            <button type='' className='w-100 btn btn-danger'> <DeleteOutlineIcon /> Delete</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile