import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { 
  Typography,
  Container,
  Box
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    background: '#636466',
    color: '#fff',
    paddingTop: '20px',
    paddingBottom: '20px'
  },
}))

export function TopBar () {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Container>
        <Typography>TopBar</Typography>
      </Container>
    </Box>
  )
}
