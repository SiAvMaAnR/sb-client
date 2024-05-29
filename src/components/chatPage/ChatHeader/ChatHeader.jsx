import moment from 'moment'
import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import api from '../../../api/api'
import defaultImageMapper from '../../../utils/mappers/defaultImageMapper'
import config from '../../../config/configuration'
import { channelType } from '../../../constants/chat'
import { activityStatus } from '../../../constants/system'
import './ChatHeader.scss'

function formatLastOnlineAt(lastOnlineAt) {
  if (!lastOnlineAt) {
    return null
  }
  const date = moment(lastOnlineAt)

  const formattedDate = date.isSame(moment(), 'day')
    ? `Seen today at ${date.format('HH:mm')}`
    : `Seen on ${date.format('D MMM')}`

  return formattedDate
}

const getActivityStatus = (channelInfo) => {
  const isOnline = channelInfo.userActivityStatus?.toLowerCase() === activityStatus.online

  const result = isOnline ? 'Online now' : formatLastOnlineAt(channelInfo.userLastOnlineAt)

  return result
}

function ChatHeader({ className, channel }) {
  const imageSrc = channel?.image
    ? `data:image/jpeg;base64, ${channel.image}`
    : `${config.app.publicPath}/defaultImages/${defaultImageMapper[channel?.type]}.jpg`

  return (
    <div className={`c-chat-header ${className}`}>
      <div className="image">
        <img src={imageSrc} alt="channel-img" />
      </div>

      <div className="info">
        <div className="channel-name">{channel?.name}</div>

        <div className="additional-info">
          {channel?.type === channelType.direct ? (
            <div className="status-info">{getActivityStatus(channel)}</div>
          ) : (
            <div className="members-count">{channel?.membersCount} members</div>
          )}
        </div>
      </div>

      <div className="search">.</div>

      <div className="menu">.</div>
    </div>
  )
}

ChatHeader.defaultProps = {
  className: '',
  channel: null
}

ChatHeader.propTypes = {
  className: PropTypes.string,
  channel: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.string,
    membersCount: PropTypes.number
  })
}

export default ChatHeader