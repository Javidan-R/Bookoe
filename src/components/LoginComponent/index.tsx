import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../../Atoms/Button';

export const LoginComponent = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/auth/login');
  };

  return (
    <>
      <NavLink to="/auth/login">
        <Button
          className="
            w-[6.5625rem] h-[3.75rem] rounded-[0.875rem] bg-[#f0eeff] text-purple-500 font-bold py-2 px-4 rounded-xl
            mb-2
          "
          onClick={handleLoginClick}
        >
          <div className="text-[#6c5dd3] font-['Cairo'] text-lg font-bold leading-[normal]">
            Log In
          </div>
        </Button>
      </NavLink>
    </>
  );
};
