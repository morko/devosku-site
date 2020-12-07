import React from 'react'
import { useTheme } from 'react-jss'
import SectionHeader from '../../components/SectionHeader'
import useStyles from './SkillsSection.styles.js'
import { IoLogoJavascript, IoLogoNodejs } from 'react-icons/io'
import { SiSkillshare, SiTypescript, SiReact, SiAnsible, SiWordpress, SiGatsby, SiPhp } from 'react-icons/si'
import Container from '../../components/Container'
import SkillCard from '../../components/SkillCard'
import LittleAbstractPattern from '../../components/LittleAbstractPattern'

export default function SkillsSection(props) {
  const theme = useTheme()
  const classes = useStyles({ theme })

  return (
    <Container className={classes.projects}>
      <SectionHeader className={classes.header} icon={<SiSkillshare />}>
        My Skills
      </SectionHeader>
      <div className={classes.description}>
        <LittleAbstractPattern />
        <p>My motto is to always pick the most suitable tool for the job but here are some I am comfortable using.</p>
      </div>
      <div className={classes.skillGrid}>
        <SkillCard icon={<IoLogoJavascript />} title="JavaScript" />
        <SkillCard icon={<SiPhp />} title="PHP" />
        <SkillCard icon={<SiTypescript />} title="TypeScript" />
        <SkillCard icon={<SiReact />} title="React.js" />
        <SkillCard icon={<SiGatsby />} title="Gatsby.js" />
        <SkillCard icon={<IoLogoNodejs />} title="Node.js" />
        <SkillCard icon={<SiAnsible />} title="Ansible" />
        <SkillCard icon={<SiWordpress />} title="WordPress" />
      </div>
    </Container>
  )
}
