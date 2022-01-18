import { css, styled } from '../../stitches.config'

const panelStyles = css({
  backgroundColor: '$panel',
  borderRadius: '$3',
  boxShadow:
    '$colors$shadowLight 0px 10px 38px -10px, $colors$shadowDark 0px 10px 20px -15px',
})

const Panel = styled('div', panelStyles)

export { panelStyles }
export default Panel
