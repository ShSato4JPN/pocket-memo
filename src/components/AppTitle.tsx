import React from 'react'
import styles from '../../styles/AppTitle.module.scss'

type Props = {
  label: string
}

const AppTitle: React.FC<Props> = (props) => {
  return (
    <div className={styles['title-form']}>
      <div className={styles['title']}>{props.label}</div>
    </div>
  )
}

export default AppTitle
