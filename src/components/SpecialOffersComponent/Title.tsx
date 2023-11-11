import React , {FC} from 'react'
interface TitleProps{
  titleName:string
}
export const Title:FC<TitleProps> = ({titleName}) => {
    const titleStyle ={
        width: "251.044px",
        color: "var(--DarkPurple, #11142D)",
        fontFamily: "Cairo",
        fontSize: "24px",
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "normal", 
    }
  return (
      <h3 style={titleStyle}>{titleName}</h3>
  )
}
