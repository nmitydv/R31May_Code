import React from 'react'

const user = {
    name: 'Hritik',
    imageUrl: 'https://drive.google.com/file/d/18v45OA0ZZc4Su6SlPMvr5gDiEu8SdBDj/view?usp=drive_link',
    imageSize: 90,
  };

const Profile = () => {
  return (
    <>
    <h1>{user.name}</h1>
    <img
      className="avatar"
      src={user.imageUrl}
      alt={'Photo of ' + user.name}
      style={{
        width: user.imageSize,
        height: user.imageSize
      }}
    />
  </>
  )
}

export default Profile