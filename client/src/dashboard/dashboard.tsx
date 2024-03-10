import MainComponent from '@/components/ui/transits';
import Receptionist from './receptionist';


export default function Dashboard() {
  return (
    <>
      {localStorage.getItem('isLoggedIn') === 'true' ? (
        <div>
          <Receptionist />
          <div>
            {
              <MainComponent />
            }
          </div>
        </div>
      ) : (
        window.location.href = '/login'
      )}
    </>
  );
}
