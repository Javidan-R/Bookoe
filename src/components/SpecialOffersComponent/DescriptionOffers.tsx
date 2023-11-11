import React,{FC} from 'react'
interface DecProps{
  descName:string
}
export const DescriptionOffers:FC<DecProps> = ({descName}) => {
  const descStyle = {
    width: "352.73px",
    height: "120px",
    flexShrink: 0,
    color: "rgba(0, 0, 0, 0.80)",
    fontFamily: "Open Sans",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  }
  return (
    <p style={descStyle}>
      {descName}
    </p>
  )
}
