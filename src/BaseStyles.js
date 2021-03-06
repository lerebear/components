import React from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import PropTypes from 'prop-types'
import {TYPOGRAPHY, COMMON} from './constants'
import useMouseIntent from './hooks/useMouseIntent'
import theme from './theme'

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  body { margin: 0; }
  table { border-collapse: collapse; }
  body.intent-mouse {
    [role="button"]:focus,
    [role="tabpanel"][tabindex="0"]:focus,
    button:focus,
    summary:focus,
    a:focus {
      outline: none;
      box-shadow: none;
    }

    [tabindex="0"]:focus,
    details-dialog:focus {
      outline: none;
    }
  }

`
const Base = (props) => {
  const {color, lineHeight, fontFamily, theme, ...rest} = props
  useMouseIntent()
  return (
    <div {...rest}>
      <GlobalStyle />
      {props.children}
    </div>
  )
}
const BaseStyles = styled(Base)`
  ${TYPOGRAPHY} ${COMMON};
`

BaseStyles.defaultProps = {
  color: 'gray.9',
  fontFamily: 'normal',
  lineHeight: 'default',
  theme,
}

BaseStyles.propTypes = {
  ...TYPOGRAPHY.propTypes,
  ...COMMON.propTypes,
  theme: PropTypes.object,
}
export default BaseStyles
