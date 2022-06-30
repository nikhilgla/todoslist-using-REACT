import React from 'react'

const About = () => {
    return (
        <div className='container'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque assumenda ea est, ducimus, hic similique iste praesentium ut dolore, modi dolor architecto asperiores at consectetur nesciunt ad dignissimos suscipit itaque.</p>
            <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
                <div className="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                    <div className="my-3 py-3">
                        <h2 className="display-5">welcpme to my about page</h2>
                        <p className="lead">And an even wittier subheading.</p>
                    </div>
                    <div className="bg-light shadow-sm mx-auto" ></div>
                </div>
                <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div className="my-3 p-3">
                        <h2 className="display-5">Lalalalaalalala</h2>
                        <p className="lead">And an even wittier subheading.</p>
                    </div>
                    <div className="bg-dark shadow-sm mx-auto"></div>
                </div>
            </div>
        </div>
    )
}

export default About
