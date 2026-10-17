import React from 'react'
function Awards() {
    return ( 
        <>
            <div className='container mt-5'>
                <div className='row align-items-stretch g-4'>
                    <div className='col-md-6 d-flex'>
                        <img 
                            src='media/images/awards-left.jpg'
                            alt='left-side-img'
                            className='img-fluid w-100 h-100 rounded'
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className='col-md-6 align-items-center d-flex flex-column justify-content-center h-100 text-size-50'>
                        <h1> Awards </h1>
                        <p className='text-size-50'>
                            largest website in fucking world
                        </p>
                        <ul>
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                        </ul>
                    </div>
                </div>

            </div>
        
        
        </>
     );
}

export default Awards;

//classname = row , takes complete row space