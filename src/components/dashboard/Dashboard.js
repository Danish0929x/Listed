import React from 'react'
import dashboard from '../../assets/images/dashboard.svg'
import transactions from '../../assets/images/transactions.svg'
import schedule from '../../assets/images/schedule.svg'
import users from '../../assets/images/users.svg'
import settings from '../../assets/images/settings.svg'
import search from '../../assets/images/search.svg'
import noti from '../../assets/images/noti.svg'
import one from '../../assets/images/1.svg'
import two from '../../assets/images/2.svg'
import three from '../../assets/images/3.svg'
import four from '../../assets/images/4.svg'
import LineChart from '../Linedata'
import { signOutUser } from "../../Firebase";
import { useNavigate } from "react-router-dom";



function Dashboard() {
    const navigate = useNavigate();

    const profilePic = localStorage.getItem('profilePic');
    const handleLogout = () => {
        signOutUser(navigate);
      };
  return (
    <div className='dashboard'>
      <div className='dashboard-left'>
        <h2>Board.</h2>
        <div className='sidebar-links'>
            <div className='sl-item'>
                <img className='' src={dashboard} />
                <p>Dashboard</p>
            </div>
            <div className='sl-item'>
                <img className='' src={transactions} />
                <p>Transactions</p>
            </div>
            <div className='sl-item'>
                <img className='' src={schedule} />
                <p>Schedules</p>
            </div>
            <div className='sl-item'>
                <img className='' src={users} />
                <p>Users</p>
            </div>
            <div className='sl-item'>
                <img className='' src={settings} />
                <p>Settings</p>
            </div>
        </div>
        <div className='s-bootom'>
            <p>Help</p>
            <p>Contact us</p>
        </div>
        </div>
        <div className='dashboard-main'>
            <div className='dm-top'>
                <div className='dmt-left'>
                    <h2>Dashboard</h2>
                </div>
                <div className='dmt-right'>
                    <div className='custom-in'>
                        <input type='text'/>
                        <img src={search} />
                    </div>
                    <img src={noti} className='noti' onClick={handleLogout}/>
                    <img className='pro' src={profilePic} />
                </div>
            </div>
            <div className='dm-first'>
                <div className='dmf-item'>
                    <img src={one} />
                    <p>Total Revenues</p>
                    <h2>$2,129,430</h2>
                </div>
                <div className='dmf-item'>
                    <img src={two} />
                    <p>Total Transactions</p>
                    <h2>1,520</h2>
                </div>
                <div className='dmf-item'>
                    <img src={three} />
                    <p>Total Likes</p>
                    <h2>9,721</h2>
                </div>
                <div className='dmf-item'>
                    <img src={four} />
                    <p>Total Users</p>
                    <h2>892</h2>
                </div>
            </div>
            <div className='dm-second'>
                <LineChart />
            </div>
        </div>
    </div>
  )
}

export default Dashboard
