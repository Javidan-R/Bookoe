
import { ReactNode, FC ,useContext , useEffect} from 'react';
import {  Logo } from '../../../components/Header';
import { BooksCategories, FooterAbout, OutStore, QuickLinks } from '../../../components/Footer';
import { FollowUs } from '../../../components/Footer/FollowUs';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../../../pages/Main/Home/NavBar';
import { ThemeContext } from '../../../context/ThemeContext';


interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const {theme , ChangeMood} = useContext(ThemeContext)
  useEffect(()=>{
    document.body.className= theme
  },[theme])
  return (
    <>
    <div className={theme}>

   
     <Navbar ChangeMood ={ChangeMood} />
      <main className="p-4 md:p-6 xl:p-12">
        {children}
        <Outlet/>
      </main>

      <footer className= "p-4 md:p-6 xl:p-12"    >
      {/* <Subscribe /> */}

        <div className="container mx-auto md:p-0 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="w-full md:w-1/4 mb-6 md:mb-0 mr-5">
            <Logo className="w-26 h-26 md:w-auto md:h-auto object-contain" />
            <FooterAbout className="text-[1rem] leading-[1.5rem] font-open-sans text-darkpurple text-left mt-4 mb-4" />
            <FollowUs />
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="mb-6 md:mb-10 text-xl">Books Categories</h3>
            <BooksCategories className="flex flex-col items-start gap-3" />
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="mb-6 md:mb-10 text-xl">Quick Links</h3>
            <QuickLinks className="flex flex-col items-start gap-3" />
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="mb-6 md:mb-10 text-xl">Our Store</h3>
            <OutStore />
          </div>
        </div>
      </footer>
      </div>
    </>
  );
};