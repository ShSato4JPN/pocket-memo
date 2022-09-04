import { Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const isMobile = () => {
  const isMobileSize = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('xs')
  )
  return isMobileSize
}

export { isMobile }
