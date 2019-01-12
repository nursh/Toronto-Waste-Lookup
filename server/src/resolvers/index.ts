import data from '../data.json';

export default {
  Query: {
    name: () => "Michael Jackson",
    items: (_: any, { search }: any) => {
      if (!search) return data;
      const searchResults = data.filter(item => item.keywords.includes(search));
      return searchResults;
    }
  }
};
