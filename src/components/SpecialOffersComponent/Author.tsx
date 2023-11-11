import React,{FC} from 'react'
interface AuthorProps{
  authorName:string
}
export const Author:FC<AuthorProps> = ({authorName}) => {
    const authorStyle = {
        color: "var(--DarkPurple, #11142D)",
        fontFamily: "Open Sans",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "normal", 
    }
  return (
    <h5 style={authorStyle}>{authorName}</h5>
  )
}
