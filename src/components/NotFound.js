import React from 'react';
import '../styles/NotFound.scss';
import { Button } from '@material-ui/core'

const NotFound = ({ history }) => {
  return (
    <div className="FourOhFour">
      <div className="bg" style={{ backgroundImage: 'url("https://c1.staticflickr.com/8/7172/6508022985_b22200ced0_b.jpg")' }}></div>
      <Button
        color="secondary"
        variant="contained"
        onClick={() => history.push('/')}
      >
        Click Here "Go Back to DASHBOARD"
      </Button>
    </div>
  )
}

export default NotFound;