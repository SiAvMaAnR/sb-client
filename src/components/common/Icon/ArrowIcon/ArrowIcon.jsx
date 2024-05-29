import PropTypes from 'prop-types'
import './ArrowIcon.scss'

function ArrowIcon({ className }) {
  return (
    <div className={`c-arrow-icon ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
      </svg>
    </div>
  )
}

ArrowIcon.defaultProps = {
  className: ''
}

ArrowIcon.propTypes = {
  className: PropTypes.string
}

export default ArrowIcon