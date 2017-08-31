import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import colors from '@artsy/reaction-force/dist/assets/colors'
import { primary } from '@artsy/reaction-force/dist/assets/fonts'
import { frameAnimator } from '../utils'

const propTypes = {
  geneFamilies: PropTypes.array.isRequired
}

const ResponsiveSidebar = styled.aside`
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 24%;
    overflow: hidden;
    padding-top: 0.5em;
  }
`

const GeneFamilyList = styled.ul`
  position: fixed;
  width: inherit;
  padding-right: 2em;

  ${primary.style}
  font-size: 13px;
  line-height: 1.33em;
`

const GeneFamilyItem = styled.li`margin-bottom: 1em;`

const GeneFamilyLink = styled.a`
  transition: color 0.125s;
  text-decoration: none;

  &:hover {
    color: ${colors.purpleRegular};
  }
`

class GeneFamilyNav extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    e.preventDefault()
    const id = e.target.hash
    const section = document.querySelector(id)
    const topBuffer = 90
    const scroller = frameAnimator(
      {
        duration: 600,
        startValue: window.scrollY,
        endValue: section.offsetTop - topBuffer
      },
      val => {
        window.scrollTo(0, val)
      }
    )
    window.requestAnimationFrame(scroller)
  }

  render () {
    const { geneFamilies } = this.props
    return (
      <ResponsiveSidebar>
        <GeneFamilyList>
          {geneFamilies.map(geneFamily => (
            <GeneFamilyItem key={geneFamily.id}>
              <GeneFamilyLink
                href={`#${geneFamily.id}`}
                onClick={this.handleClick}
              >
                {geneFamily.name}
              </GeneFamilyLink>
            </GeneFamilyItem>
          ))}
        </GeneFamilyList>
      </ResponsiveSidebar>
    )
  }
}

GeneFamilyNav.propTypes = propTypes

export default GeneFamilyNav
