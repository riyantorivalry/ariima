import React from 'react'
import { styBoxWrapper } from './styles'

export default function SectionBox({ icon, text }) {
  return (
    <div className="col-md-4" css={styBoxWrapper}>
        <div className="img-section">
            <img src={icon} alt="icon" className="img"/>
        </div>
        <div className="text_section">
            <span className="text_info">{text}</span>
        </div>
    </div>
  )
}
