const options = {
  method: 'GET',
  headers: {
    'xc-token': process.env.NOCODB_TOKEN
  }
};

const fetchData = async (baseUrl: string, company: string) => {
  const url = `${baseUrl}&where=(company,eq,${company})`;
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

const fetchWithFallback = async (baseUrl: string, company: string) => {
  let result = await fetchData(baseUrl, company);
  if (result.pageInfo.totalRows) {
    return result.list;
  }

  result = await fetchData(baseUrl, "default");
  return result.list;
};

export const fetchAchievements = (company = "default") => {
  const url = `https://app.nocodb.com/api/v2/tables/mg7iordiv6eat59/records?viewId=vwvah6e93sdsknb4`;
  return fetchWithFallback(url, company);
};

export const fetchSkills = (company = "default") => {
  const url = `https://app.nocodb.com/api/v2/tables/mdmixquk4sx4spo/records?viewId=vweeily3lew2gpib`;
  return fetchWithFallback(url, company);
};
