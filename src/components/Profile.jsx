import React from 'react';
import s from './Profile.module.css';


const Profile = () => {
    return  <div className={s.content}>
    <div>
      <img src='https://of-crimea.ru/plug/samye-chistye-plyazhi-1.jpg' alt=''/>
    </div>
    <div>Ava + Descr</div>
    <div>My post
      <div>New post</div>
    </div>
    <div className = {s.posts}>
      <div className= {s.item}>POst 1</div>
      <div className= {s.item}> post 2</div>
    </div>
  
  </div>
}


export default Profile;