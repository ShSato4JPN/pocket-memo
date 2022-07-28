import React from 'react'
import styles from '../../styles/components/AppTitle.module.scss'
import Button from '@mui/material/Button'

type Props = {
  label: string
}

const AppTitle: React.FC<Props> = (props) => {
  return (
    <div className={styles['title-form']}>
      <div className={styles['title']}>{props.label}</div>
      <Button variant='contained'>Hello World</Button>
    </div>
  )
}

export default AppTitle
