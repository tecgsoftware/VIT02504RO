const PostCard = ({ title }) => {
    return (
      <div className="p-5 bg-white shadow-lg rounded-xl transition-transform transform hover:scale-105 cursor-pointer">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    );
  };
  
  export default PostCard;
  