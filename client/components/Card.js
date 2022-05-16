const Card = ({ user }) => {
return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title, mb-0">Name: {user.name}</h5>
        <p className="card-text">
          Address: {user.address}
        </p>
      </div>
    </div>
  );
};

export default Card;