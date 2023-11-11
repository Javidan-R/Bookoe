import React,{FC} from 'react'
interface ImageProps{
  image:string;
}
export const Image:FC<ImageProps> = ({image}) => {
    const style= {	
    width: "412.3px",
    height: "306px",
    flexShrink: 0,
    borderRadius: "14px",
    background: "#C4C4C4"
    }
  return (
    <div>
        <img style={style} src={image} alt="" />
    </div>
  )
}
