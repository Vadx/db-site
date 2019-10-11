import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import logo from './../assets/logo.svg'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundSize: '100% auto',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
    width: '171px',
    height: '61px'
  },
}))

export function Logo () {
  const classes = useStyles()
  return (
    <img className={classes.root} src={logo} alt="Logo" />
  )
}
