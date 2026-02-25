import AuthLayout from "../components/layouts/AuthLayout";
import bgRegister from "../assets/register-background.jpg";
import Logo from "../components/atoms/Logo";
import Button from "../components/atoms/Button";
import Input from "../components/atoms/Input";
import googleIcon from "../assets/google.png";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <AuthLayout bgImage={bgRegister}>
      <Logo />

      <div className='text-white flex flex-col items-center gap-1 '>
        <h1 className='text-xl md:text-4xl font-bold'>Daftar</h1>
        <p className='text-xs md:text-lg font-normal'>Selamat datang!</p>
      </div>

      <form onSubmit={handleRegister} className='w-full flex flex-col'>
        <Input
          labelInput='Username'
          type='text'
          id='username'
          placeholder='Masukkan username'
          className='mb-5'
        />
        <Input
          labelInput='Kata Sandi'
          type='password'
          id='password'
          placeholder='Masukkan kata sandi'
          className='mb-5'
        />
        <Input
          labelInput='Konfirmasi Kata Sandi'
          type='password'
          id='confirm-password'
          placeholder='Masukkan kata sandi'
          className='mb-2'
        />

        <div className='flex gap-1 text-xs md:text-lg'>
          <span className='text-secondary'>Sudah punya akun?</span>
          <Link
            to='/'
            className='text-white transition-transform duration-200 ease-in-out hover:text-blue-500'>
            Masuk
          </Link>
        </div>

        <div className='flex flex-col gap-2 mt-5'>
          <Button variant='secondary' type='submit'>
            Daftar
          </Button>

          <p className='text-secondary text-center text-xs md:text-lg'>Atau</p>

          <Button variant='transparent'>
            <img
              src={googleIcon}
              className='w-[12px] md:w-[18px]'
              alt='google icon'
            />
            <span>Daftar dengan Google</span>
          </Button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Register;
