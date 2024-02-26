import React from 'react'

function Call_form() {
    return (
        <>
            <section className="calling_form">
                <div className="container-fluid">
                    <div className="col-xxl-6 col-xl-6 col-lg-8 col-md-12 col-sm-12" style={{ margin: "auto" }}>
                        <div className="calling_form_box">
                            <div className="calling_form_box_heading">
                                <h5>Share Details</h5>
                                <p>to share it with your astrologer, for saving time on consultation</p>
                            </div>
                            <form action="" method="post">
                                <div className="form-group">
                                    <label class="form-label">Enter Name <span>*</span></label>
                                    <input type="text" name="" placeholder='Enter Your Full Name' className='form-control' id="" />
                                </div>

                                <div className="form-group">
                                    <label class="form-label">Gender <span>*</span></label>
                                    <select className='form-control'>
                                        <option value="male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="other">other</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label class="form-label">DOB <span>*</span></label>
                                    <input type="date" name="" className='form-control' id="" />
                                </div>

                                <div className="form-group">
                                    <label class="form-label">Time of Birth <span>*</span></label>
                                    <input type="time" name="" className='form-control' id="" />
                                </div>

                                <div className="form-group">
                                    <label class="form-label">Enter Place of Birth</label>
                                    <textarea type="text" placeholder='Enter Place of Birth' name="" className='form-control' id="" >
                                    </textarea>
                                </div>
                                <button>Submit</button>
                            </form>


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Call_form