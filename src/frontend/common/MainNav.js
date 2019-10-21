import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { Container, Link } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    background: '#fff',
    marginBottom: 20
  },
}))

const MenuItem = withStyles(theme => ({
  root: {
    textTransform: 'none',
    marginRight: '40px',
    color: '#000',
    fontSize: 15
  }
}))(Link)

export function MainNav () {
  const classes = useStyles()
  return (
    <Container className={classes.root}>
      <MenuItem component="button" variant="body2">Trending</MenuItem>
      <MenuItem component="button" variant="body2">Issuers</MenuItem>
      <MenuItem component="button" variant="body2">BD Sign-up</MenuItem>
      <MenuItem component="button" variant="body2">Market Data</MenuItem>
      <MenuItem component="button" variant="body2">Press</MenuItem>
      <MenuItem component="button" variant="body2">About DBOT</MenuItem>
    </Container>
  )
}
