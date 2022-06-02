import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
export class SocailMedia extends Component {
  render() {
    return (
        <div className="flex w-[170px] justify-between">
        {/* change the w-[200] */}
        <div className="bg-[#4f5864] h-8 w-8 rounded-full flex items-center justify-center">
          <FontAwesomeIcon
            icon={faFacebookF}
            className=" text-white w-3"
          />
        </div>
        <div className="bg-[#4f5864] h-8 w-8 rounded-full flex items-center justify-center">
          <FontAwesomeIcon icon={faTwitter} className=" text-white w-5" />
        </div>
        <div className="bg-[#4f5864] h-8 w-8 rounded-full flex items-center justify-center">
          <FontAwesomeIcon
            icon={faInstagram}
            className=" text-white w-5"
          />
        </div>
        <div className="bg-[#4f5864] h-8 w-8 rounded-full flex items-center justify-center">
          <FontAwesomeIcon icon={faYoutube} className=" text-white w-5" />
        </div>
      </div>
    )
  }
}

export default SocailMedia