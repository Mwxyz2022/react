import React from 'react';
import moment from 'moment';

const Profile = props => {
  const formatDate = moment(props.user.birthDate).format('DD MMM YYYY');

  return (
    <>
      <div className="profile__name">{`${props.user.firstName} ${props.user.lastName}`}</div>
      <div className="profile__birth">{`Was born ${formatDate} in ${props.user.birthPlace}`}</div>
    </>
  );
};

export default Profile;
