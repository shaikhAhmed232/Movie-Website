import DisplayMovie from "../DisplayMovie";



const Trending = ({fetchingUrl}) => {
  return (
    <>
      <DisplayMovie fetchingUrl={fetchingUrl} />
    </>
  );
};

export default Trending;
