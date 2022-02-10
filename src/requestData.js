import axios from "axios"

const movieData = async (fetchUrl, settingData, settingTotalPages) => {
  const { data } = await axios.get(fetchUrl);
  settingTotalPages(data.total_pages)
  settingData(data.results);
};

export default movieData;
