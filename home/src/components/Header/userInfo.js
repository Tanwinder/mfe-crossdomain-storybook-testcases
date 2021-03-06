const UserInfo = ({ userInfo }) => {
  return (
    <>
      {userInfo ? (
        <div className="userinfo">
          {`${userInfo?.result?.firstName} ${userInfo?.result?.lastName}`}
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default UserInfo;
