import PropTypes from 'prop-types'
import './Brand.scss'

function Brand({ className, children }) {
  const [word1, word2] = children.split('|')

  return (
    <div className={`c-brand ${className}`}>
      <span className="first">{word1}</span>
      <span className="second">{word2}</span>
    </div>
  )
}

Brand.defaultProps = {
  children: '',
  className: ''
}

Brand.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string
}

export default Brand