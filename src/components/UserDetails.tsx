import IUSerData from '../types/userData';
import '../App.css';

const UserDetails: React.FC<{ name: any, email: any, phone: any, picture: any, location: any }> = ({ name, email, phone, picture, location }: IUSerData) => {
    return (
        <div>
            <div className="fade-in-image">
                <img className="img" src={picture?.large} alt="user-img"></img>
            </div>
            <h2><b>{name?.title}. {name?.first} {name?.last}</b></h2>
            <h4> 📧 {email}</h4>
            <h4> 🏠 {location?.city}, {location?.state},  {location?.country}</h4>
            <h4> 📞 {phone}</h4>
        </div>
    )
}

export default UserDetails