import React from 'react'
import { useParams } from 'react-router-dom'
import { Menu } from './Menu'

export const LukeApiWalker = () => {

  const id = useParams()

  return (
    <div>
        <Menu id={id} />
    </div>
  )
}
