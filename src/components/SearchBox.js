import React from 'react'

function SearchBox({ setsearchField }) {

    return (
        <div className="pa2">
            <input
                onChange={(e) => setsearchField(e.target.value)}
                placeholder="search robots"
                className="pa3 ba b--green bg-lightest-blue"
                type="search" />
        </div>
    )
}

export default SearchBox
