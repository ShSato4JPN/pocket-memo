import React from 'react'
import {
  ComponentStory,
  ComponentMeta,
} from '@storybook/react'

import InputLimitationTextField from '../../../src/components/utils/InputLimitationTextField'

export default {
  title: 'Utils/InputLimitationTextField',
  component: InputLimitationTextField,
} as ComponentMeta<typeof InputLimitationTextField>

const [text, setText] = React.useState<string>('')

const Template: ComponentStory<
  typeof InputLimitationTextField
> = (args) => (
  <InputLimitationTextField
    text={text}
    setText={setText}
    label={'test label'}
    limit={10}
  />
)

export const normal = Template.bind({})
