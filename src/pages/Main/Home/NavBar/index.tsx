import { Logo } from '../../../../components/LogoComponent'
import { LoginComponent, Menus, SignUp } from '../../../../components/Header'

export const Navbar = () => {
  return (
    <>
        <header className="p-4 md:p-6 xl:p-12">
        <div className="container-xl mx-auto p-4 md:p-0 flex flex-col  md:flex-row xl:flex-row md:justify-between md:items-center">
          <Logo className="w-[16rem]  h-32 md:w-auto md:h-auto m-auto object-contain" />
            <Menus />
          <div className=" flex flex-col  md:flex-row xl:flex-row items-start mt-4 md:mt-0 gap-6 ">
            <LoginComponent/>
            <SignUp />
          </div>
        </div>
      </header>



    </>
  )
}
