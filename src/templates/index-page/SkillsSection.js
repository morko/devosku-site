import React from 'react'
import { useTheme } from 'react-jss'
import SectionHeader from '../../components/SectionHeader'
import useStyles from './SkillsSection.styles.js'
import { IoLogoJavascript, IoLogoNodejs } from 'react-icons/io'
import {
  SiSkillshare,
  SiTypescript,
  SiReact,
  SiAnsible,
  SiWordpress,
  SiGatsby,
  SiPhp,
  SiLinux,
  SiUbuntu,
  SiGit,
  SiGithub,
} from 'react-icons/si'
import Container from '../../components/Container'
import SkillCard from '../../components/SkillCard'

export default function SkillsSection(props) {
  const theme = useTheme()
  const classes = useStyles({ theme })

  return (
    <Container id="my-skills" className={classes.projects}>
      <SectionHeader className={classes.header} icon={<SiSkillshare />}>
        My Skills
      </SectionHeader>
      <div className={classes.description}>
        <p>
          I am mainly focused on web development and anything that comes with
          it. This includes things like Linux system administration, DevOps,
          UI/UX design and programming.
        </p>
        <p>
          My motto is to always pick the most suitable tool for the job, but
          below I have listed some technologies I am currently most comfortable using.
        </p>
      </div>

      <h3>Programming Languages</h3>
      <div className={classes.skillGrid}>
        <SkillCard icon={<IoLogoJavascript />} title="JavaScript" />
        <SkillCard icon={<SiTypescript />} title="TypeScript" />
        <SkillCard icon={<SiPhp />} title="PHP" />
      </div>

      <h3>Web Development</h3>
      <div className={classes.skillGrid}>
        <SkillCard icon={<SiReact />} title="React.js" />
        <SkillCard icon={<SiGatsby />} title="Gatsby.js" />
        <SkillCard icon={<SiWordpress />} title="WordPress" />
        <SkillCard icon={<IoLogoNodejs />} title="Node.js" />
        <SkillCard icon={<SiGit />} title="Git" />
      </div>

      <h3>System Administration</h3>
      <div className={classes.skillGrid}>
        <SkillCard icon={<SiLinux />} title="Linux" />
        <SkillCard icon={<SiUbuntu />} title="Ubuntu" />
        <SkillCard icon={<SiAnsible />} title="Ansible" />
      </div>
    </Container>
  )
}
