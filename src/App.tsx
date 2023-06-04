import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import IUSerDataResponse from './types/userResponseData';
import IUSerData from './types/userData';
import UserDetails from './components/UserDetails';

const App: React.FC = () => {
  const url: string = "https://randomuser.me/api";
  const [userData, setUserData] = useState<Array<IUSerData>>([]);
  const [refresh, setRefresh] = useState<boolean>(false);
  const [apiError, setApiError] = useState<boolean>(false);

  useEffect(() => {
    getUserData();
  }, [refresh]);

  const getUserData: any = async () => {
    await axios.get<IUSerDataResponse>(url).then(async (res) => {
      localStorage.setItem('randomUser', JSON.stringify(res.data.results));
      let storageData: any = localStorage.getItem('randomUser');
      storageData = JSON.parse(storageData);
      setUserData(storageData);
    }
    ).catch((error) => {
      setUserData([]);
      setApiError(true);
    }
    )
  }

  if (apiError) return <div>
    <img className='error-image' src="https://cdn.dribbble.com/users/1078347/screenshots/2799566/media/da1689a913fb87f888988230e869c896.png" alt="Something went wrong!"></img>
  </div>;
  if (!userData) return null;
  return (
    <div className='app'>
      <div className='profile-card'>
        {userData.map((user: IUSerData) => {
          return <div key={user.phone}>
            <UserDetails {...user} ></UserDetails>
            <button className="refresh-btn" id="refButtonId" title='refresh' onClick={() => setRefresh(!refresh)}>🔄️</button>
          </div>
        })
        }
      </div>
    </div>
  );
}

export default App;