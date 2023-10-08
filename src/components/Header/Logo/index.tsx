import {FC} from 'react'
import logo from '../../../assets/images/logo.png';
interface LogoProps{
  className:string;
}
export const Logo:FC<LogoProps> = ({className}) => {
  return (
      <img src={logo} alt="Book Logo" className={className}/>
  );
};
