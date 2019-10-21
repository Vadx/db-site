import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { 
  Box,
  Link,
  Container
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    background: '#636466',
    color: '#fff',
    paddingTop: '40px',
    paddingBottom: '40px',
    borderTop: '1px solid #000'
  },
}))

const MenuItem = withStyles(theme => ({
  root: {
    textTransform: 'none',
    margin: '0 10px',
    color: '#fff',
    fontSize: 15
  }
}))(Link)

export function Footer () {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Container 
        maxWidth="lg"
      >
        <Box
          display="flex" 
          justify="center" 
          spacing={0}
          alignItems="center"
          justifyContent="space-between"
        >
          <Box fontSize={12}>© Delaware Board of Trade Inc., DBOT ATS LLC. All Rights Reserved</Box>
          <Box>
            <MenuItem>Privacy Policy</MenuItem>
            <MenuItem> Contact Us</MenuItem>
          </Box>
          <Box>
            Images
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
