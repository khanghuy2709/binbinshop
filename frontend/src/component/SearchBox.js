import React, { useState } from 'react';

export default function SearchBox(props) {
    const [name, setName] = useState('');
    const submitHandler = (e) => {
      e.preventDefault();
      props.history.push(`/search/name/${name}`);
    };

    return (
        <div>
            <form onSubmit={submitHandler} style={{border:"none"}}>
              <input type="search" placeholder="tìm theo tên" 
              onChange={(e) => setName(e.target.value)}
               />
              <button  type="submit">Tìm Kiếm</button>
              </form>
        </div>
    )
}
