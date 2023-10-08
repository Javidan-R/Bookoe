import {FC} from 'react'

interface  FooterAboutProps {
  className:string;
}

export const FooterAbout: FC<FooterAboutProps> = ({ className , ...props }) => {
  return (
    <p className={className} {...props } >
      Book Store Website
Bookoe is a Book Store Website lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
Follow Us
    </p>
    
  )
}
