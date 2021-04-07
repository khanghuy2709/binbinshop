import React from 'react'
import { Link } from 'react-router-dom';

export default function Head(drop) {



  
    return (
        <div className="f">
        <div className="f1">
          <div className="e">
            <div>
              <img src="list-solid.svg" alt="" style={{width: '2rem'}} />
            </div>
            <p> DANH SÁCH SẢN PHẨM</p>
          </div>
          <ul className="f1a">
            <li className="test">
              <Link to="/search/name/k">GIÀY NAM </Link>
            </li>
            <li className="test">
              <Link to="/search/name/ui">GIÀY NỮ</Link>
            </li>
            <li className="test"><Link to="/search/name/may">GIÀY TRẺ EM</Link></li>
            <li className="test"><Link to="/search/name/h">GIÀY ĐẶC BIỆT </Link></li>
          </ul>
        </div>
        <div>
          <img src="https://salt.tikicdn.com/cache/w824/ts/banner/b5/a8/2c/56699e577ed0307dd6fb304663157b3c.png.jpg" alt=""/>
        </div>
      </div>
    )
}
