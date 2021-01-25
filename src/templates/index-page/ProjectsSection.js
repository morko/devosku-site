import React from 'react'
import { useTheme } from 'react-jss'
import SectionHeader from '../../components/SectionHeader'
import useStyles from './ProjectsSection.styles'
import { IoMdHammer } from 'react-icons/io'
import Container from '../../components/Container'
import Project from '../../components/Project'

export default function ProjectsSection(props) {
  const { projects } = props
  const theme = useTheme()
  const classes = useStyles({ theme })

  return (
    <Container id="my-projects" className={classes.projects}>
      <SectionHeader className={classes.header} icon={<IoMdHammer />}>
        My Projects
      </SectionHeader>
      {projects.map((el) => {
        const { id, frontmatter } = el.node
        return (
          <Project
            key={id}
            title={frontmatter.title}
            featuredImage={frontmatter.featuredImage}
            description={frontmatter.description}
            html={el.node.html}
            technologies={frontmatter.technologies}
            links={frontmatter.links}
          >
          </Project>
        )
      })}
    </Container>
  )
}
