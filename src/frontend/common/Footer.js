import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { 
  Typography
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    background: '#636466',
    color: '#fff',
    padding: '20px 0'
  },
}))

export function Footer () {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography>© Delaware Board of Trade Inc., DBOT ATS LLC. All Rights Reserved</Typography>
    </div>
  )
}
