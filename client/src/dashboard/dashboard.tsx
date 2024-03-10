import MainComponent from '@/components/ui/transits';
import Receptionist from './receptionist';

export default function Dashboard() {
  return (
    <>
      {localStorage.getItem('isLoggedIn') === 'true' ? (
        localStorage.getItem('role') === 'receptionist' ? (
          <div>
            <Receptionist />
            <div>
              <MainComponent />
            </div>
          </div>
        ) : (
          <div className='flex w-full h-screen items-center justify-center'>
            You have logged in as a factory worker. You are not authorized to manage incoming transits.
          </div>
        )
      ) : (
        window.location.href = '/login'
      )}
    </>
  );
}
