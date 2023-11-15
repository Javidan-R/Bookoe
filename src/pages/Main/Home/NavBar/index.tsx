import React from 'react'
import { Logo } from '../../../../components/LogoComponent'
import { Login, Menus, Search, SignUp } from '../../../../components/Header'

export const Navbar = () => {
  return (
    <>
        <header className="p-4 md:p-6 xl:p-12">
        <div className="container-xl mx-auto p-4 md:p-0 flex flex-col md:flex-row xl:flex-row md:justify-between md:items-center">
          <Logo className="w-[20rem] h-32 md:w-auto md:h-auto object-contain" />
            <Menus />

          <div className="flex mt-4 md:mt-0 space-x-4">
            <Login />
            <SignUp />
          </div>
        </div>
      </header>



    </>
  )
}
