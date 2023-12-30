import React from 'react'
import Message from './Message'
import { Notification } from './Notification'
import AvatarAdmin from './Avatar'

const RightAdmin = ({user}) => {
  return (
    <div className="gap-[20px] h-full flex items-center">
      <Message />
      <Notification />
      <AvatarAdmin user={user}/>
    </div>
  )
}

export default RightAdmin