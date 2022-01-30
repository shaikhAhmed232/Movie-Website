import reqInstance from "./axiosMng";

const movieData = async (fetchUrl) => {
  const { data } = await reqInstance.get(fetchUrl);
  return data.results;
};

export default movieData;
