
import { ReactNode, FC } from 'react';
import { Login, Logo, Menus, Search, SignUp } from '../../../components/Header';
import { BooksCategories, FooterAbout, OutStore, QuickLinks } from '../../../components/Footer';
import { FollowUs } from '../../../components/Footer/FollowUs';
import { Home } from '../../../pages';
import { Outlet } from 'react-router-dom';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <header className="p-4 md:p-6 xl:p-12">
        <div className="container-xl mx-auto p-4 md:p-0 flex flex-col md:flex-row md:justify-between md:items-center">
          <Logo className="w-32 h-32 md:w-auto md:h-auto object-contain" />
          <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-auto mt-4 md:mt-0 md:ml-4">
            <Menus />
            <Search />
          </div>

          <div className="flex mt-4 md:mt-0 space-x-4">
            <Login />
            <SignUp />
          </div>
        </div>
      </header>

      <main className="p-4 md:p-6 xl:p-12">
        {children}
        <Outlet/>
      </main>

      <footer className="p-4 md:p-6 xl:p-12 ">
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

    </>
  );
};