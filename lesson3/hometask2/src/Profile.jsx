import React from 'react';
import moment from 'moment';

const Profile = props => {
  console.log(props);
  const formatDate = moment(props.userData.birthDate).format('DD MMM YYYY');

  return (
    <>
      <div className="profile__name">{`${props.userData.firstName} ${props.userData.lastName}`}</div>
      <div className="profile__birth">{`Was born ${formatDate} in ${props.userData.birthPlace}`}</div>
    </>
  );
};

export default Profile;
