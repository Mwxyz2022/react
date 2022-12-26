import React from 'react';
import moment from 'moment';

const Profile = props => {
  const formatDate = moment(props.userDate.birthDate).format('DD MMM YYYY');

  return (
    <>
      <div className="profile__name">{`${props.userDate.firstName} ${props.userDate.lastName}`}</div>
      <div className="profile__birth">{`Was born ${formatDate} in ${props.userDate.birthPlace}`}</div>
    </>
  );
};

export default Profile;
