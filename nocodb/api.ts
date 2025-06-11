const options = {
  method: "GET",
  headers: {
    "xc-token": process.env.NOCODB_TOKEN as string,
  },
};

const fetchData = async (baseUrl: string, company: string) => {
  const url = `${baseUrl}&where=(company_slugs,like,%${company}%)`;
  const response = await fetch(url, options);
  const data = await response.json();
  return data.list;
};

export const fetchCompany = async (company: string) => {
  const url = `https://app.nocodb.com/api/v2/tables/mvn11rzjs9f465t/records?viewId=vwhiyvcmcqctoxri&where=(slug,eq,${company})`;
  const response = await fetch(url, options);
  const data = await response.json();
  return data.list[0];
};

export const fetchProfile = async (company: string) => {
  const url =
    "https://app.nocodb.com/api/v2/tables/mp4tdlu4p1o5d85/records?viewId=vwq2d4d0tizeji8l";
  const profiles = await fetchData(url, company);
  return profiles[0];
};

export const fetchAchievements = (company: string) => {
  const url =
    "https://app.nocodb.com/api/v2/tables/mg7iordiv6eat59/records?viewId=vwvah6e93sdsknb4";
  return fetchData(url, company);
};

export const fetchEducation = (company: string) => {
  const url =
    "https://app.nocodb.com/api/v2/tables/mjbc8hc1l1h3s87/records?viewId=vwuvpp1yftaypfwk";
  return fetchData(url, company);
};

export const fetchWork = (company: string) => {
  const url =
    "https://app.nocodb.com/api/v2/tables/m9eux3j2on7s5du/records?viewId=vwfk3asrwznah1hs";
  return fetchData(url, company);
};

export const fetchProjects = (company: string) => {
  const url =
    "https://app.nocodb.com/api/v2/tables/mw679te4jxv33mc/records?viewId=vwirnbfmn6p3dwa6";
  return fetchData(url, company);
};

export const fetchSkills = (company: string) => {
  const url =
    "https://app.nocodb.com/api/v2/tables/mdmixquk4sx4spo/records?viewId=vweeily3lew2gpib";
  return fetchData(url, company);
};

export const fetchTalks = (company: string) => {
  const url =
    "https://app.nocodb.com/api/v2/tables/mnrd0a64gfsplzj/records?viewId=vw3k0p63cb2tz5zc";
  return fetchData(url, company);
};

export const fetchOpensourceContributions = (company: string) => {
  const url =
    "https://app.nocodb.com/api/v2/tables/mq878rsfqsknqk2/records?viewId=vwnggoemr3gy3jon";
  return fetchData(url, company);
};

export const fetchTheme = async (company: string) => {
  const url =
    "https://app.nocodb.com/api/v2/tables/mdkv2b6t8bw084s/records?viewId=vwdavei8wtxf10nw";
  const themes = await fetchData(url, company);
  return themes[0];
};
