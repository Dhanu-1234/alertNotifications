import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => (
  <div className="bg-container">
    <h1 className="main-heading">Alert Notifications</h1>
    <Notification className="parent-content-container">
      <div className="content-container">
        <div className="heading-container">
          <AiFillCheckCircle className="icon-styles success-heading" />
          <h2 className="heading success-heading">Success</h2>
        </div>
        <p className="description">
          You can access all the files in the folder
        </p>
      </div>
    </Notification>
    <Notification className="parent-content-container">
      <div className="content-container">
        <div className="heading-container">
          <RiErrorWarningFill className="icon-styles error-heading" />
          <h2 className="heading error-heading">Error</h2>
        </div>
        <p className="description">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
    <Notification className="parent-content-container">
      <div className="content-container">
        <div className="heading-container">
          <MdWarning className="icon-styles warning-heading" />
          <h2 className="heading warning-heading">Warning</h2>
        </div>
        <p className="description">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
    <Notification className="parent-content-container">
      <div className="content-container">
        <div className="heading-container">
          <MdInfo className="icon-styles info-heading" />
          <h2 className="heading info-heading">Info</h2>
        </div>
        <p className="description">
          Anyone on the internet can view these files
        </p>
      </div>
    </Notification>
  </div>
)

export default AlertNotifications
