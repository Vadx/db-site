import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Logo } from './Logo'
import Twitter from '../assets/Twitter.svg'
import LinkedIn from '../assets/LinkedIn.svg'
import { 
  Box,
  Link
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    padding: '40px 0'
  },
  extendedIcon: {
    marginLeft: theme.spacing(2),
    width: 17,
    height: 17,
    '&:hover': {
      fill:'#21C0F1'
    }
  },
  iconWrap: {
    '&:hover img': {
      fill:'#21C0F1'
    }
  }
}))

export function Header () {
  const classes = useStyles()
  return (
    <Box 
      display="flex" 
      justify="center" 
      spacing={0}
      alignItems="center"
      justifyContent="space-between"
      className={classes.root}
    >
      <Logo />

      <Box display="flex" alignItems="right">
        <Link size="small" className={classes.iconWrap} href={'https://twitter.com/dbottrading'}  target={'_blank'}>
          <img className={classes.extendedIcon} src={Twitter} alt="Twitter" />
        </Link>
        <Link size="small" className={classes.margin} href={'https://www.linkedin.com/company/dbottrading/'}  target={'_blank'}>
          <img className={classes.extendedIcon} src={LinkedIn} alt="LinkedIn" />
        </Link>
      </Box>
    </Box>
  )
}
