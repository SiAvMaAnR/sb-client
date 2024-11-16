import PropTypes from 'prop-types'
import './UploadIcon.scss'

function UploadIcon({ className = '' }) {
  return (
    <div className={`c-upload-icon ${className} `}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        id="upload"
        className="icon glyph"
      >
        <path d="M20,15a1,1,0,0,0-1,1V20a.22.22,0,0,1-.15.05H5.14C5.05,20,5,20,5,20V16a1,1,0,0,0-2,0v4a2.08,2.08,0,0,0,2.14,2H18.86A2.08,2.08,0,0,0,21,20V16A1,1,0,0,0,20,15Z" />
        <path d="M8.71,7.71,11,5.41V16a1,1,0,0,0,2,0V5.41l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-4-4h0a1.15,1.15,0,0,0-.33-.21.94.94,0,0,0-.76,0,1.15,1.15,0,0,0-.33.21h0l-4,4A1,1,0,1,0,8.71,7.71Z" />
      </svg>
    </div>
  )
}

UploadIcon.propTypes = {
  className: PropTypes.string
}

export default UploadIcon