import { Palette } from '@material-ui/icons'
import styled from 'styled-components'
import PALETTE from '../../styles/color-variables'
import { BOX_STYLE } from '../../styles/common-style'

export const Container = styled.div`
  width: 100%;
`

export const TextBox = styled.div`
  width: 100%;
  padding: 30px;
  border-right: 1px solid ${PALETTE.INPUT_BORDER};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ContentBox = styled.div`
  box-shadow: ${BOX_STYLE.SHADOW};
  background-color: ${PALETTE.WHITE};
  border-radius: 10px;
  width: 100%;
  font-size: 15px;
  line-height: 19px;
`

export const Title = styled.div`
  width: 100%;
  border-radius: 10px 10px 0 0;
  padding: 20px;
  font-size: 20px;
  color: #7a7a7a;
  border-bottom: 1px solid ${PALETTE.INPUT_BORDER};
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  p {
    font-size: 13px;
  }
`

export const Content = styled.div`
  width: 100%;
  border-radius: 10px 10px 0 0;
  padding: 20px;
  font-size: 15px;
  color: ${PALETTE.INPUT_TEXT};
`
