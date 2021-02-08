import React, { Fragment } from 'react'
import { FaHammer } from 'react-icons/fa'
import SectionTitle from '../sectionTitle'
import SkillBar from './skill-bar'

export default ({ title = 'Skills', skills = [] }) => {
  return (
    <Fragment>
      <SectionTitle
        title={title}
        name={title.toLowerCase()}
        icon={<FaHammer size={28} />}
      />
      {skills.map(skill => (
        <SkillBar key={skill.name} name={skill.name} level={skill.level} />
      ))}
    </Fragment>
  )
}
