const options = {
  method: 'GET',
  headers: {
    'xc-token': process.env.NOCODB_TOKEN
  }
};

const fetchData = async (baseUrl: string, company: string) => {
  const url = `${baseUrl}&where=(company_slugs,like,${company})`;
  const response = await fetch(url, options);
  const data = await response.json();
  return data.list;
};

export const fetchCompany = async (company: string) => {
  const url = `https://app.nocodb.com/api/v2/tables/mvn11rzjs9f465t/records?viewId=vwhiyvcmcqctoxri&where=(slug,eq,${company})`;
  const response = await fetch(url, options);
  const data = await response.json();
  return data.list;
}

export const fetchAchievements = (company: string) => {
  const url = "https://app.nocodb.com/api/v2/tables/mg7iordiv6eat59/records?viewId=vwvah6e93sdsknb4";
  return fetchData(url, company);
};

export const fetchSkills = (company: string) => {
  const url = "https://app.nocodb.com/api/v2/tables/mdmixquk4sx4spo/records?viewId=vweeily3lew2gpib";
  return fetchData(url, company);
};

export const fetchTalks = (company: string) => {
  const url = "https://app.nocodb.com/api/v2/tables/mnrd0a64gfsplzj/records?viewId=vw3k0p63cb2tz5zc";
  return fetchData(url, company);
};
