import axios from "axios";

const movieData = async (fetchUrl, settingPages, settingData) => {
  const { data } = await axios.get(fetchUrl);
  settingPages(data.total_pages);
  settingData(data.results);
};

export default movieData;
