import React from 'react'

function Search({search,setsearch,handlesearch}) {
  return (
    <div className='search-engine'>
        <input type="text"
        placeholder='enter the citt name'
        value={search}
        onChange={e=>setsearch(e.target.value)} />
        <button onClick={handlesearch}>search</button>
    </div>
  )
}

export default Search