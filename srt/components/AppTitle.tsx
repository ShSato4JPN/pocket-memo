import React from 'react'
import '../../styles/AppTitle.scss'

type Props = {
  label: string
}

const AppTitle: React.FC<Props> = (props) => {
  return (
    <div className='title-form'>
      <div className='title'>{props.label}</div>
    </div>
  )
}

export default AppTitle
