import React from 'react'
import PropTypes from 'prop-types';


    function Solution({bookList}) {

    const showBooklist = bookList?.map((e, i) => {
        return (
            <div className="col" key={i}>
                <div className="card my-2" style={{height: "100px", width: "200px"}}>
                    <div className="card-body">
                        <h5 className="card-title">{e.title}</h5>
                        <p className="card-text">{e.author}</p>
                    </div>
                </div>
            </div>
        );
    })
    return (
        <div>
            <div className='row my-2'>
                {
                    showBooklist
                }
            </div>
        </div>
    )
}

Solution.defaultProps ={
    bookList: [{title: "Title", author: "Author"}]
}

Solution.propTypes ={
    bookList: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Solution