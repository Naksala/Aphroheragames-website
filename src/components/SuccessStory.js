const SuccessStory = ({ title, description }) => (
    <div className="bg-cardBackground p-4 rounded-md w-full sm:w-1/3 min-w-[250px] m-2 sm:mx-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  );
  
  export default SuccessStory;
  