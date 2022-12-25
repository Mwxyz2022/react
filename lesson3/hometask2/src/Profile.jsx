import React from 'react';
import moment from 'moment';

const Profile = props => {
  const formatDate = moment(props.user.birthDate).format('DD MMM YYYY');

  return (
    <div className="container">
      <div className="profile__name">{`${props.user.firstName} ${props.user.lastName}`}</div>
      <div className="profile__birth">{`Was born ${formatDate} in ${props.user.birthPlace}`}</div>
    </div>
  );
};

export default Profile;
