const googleDatabase = [
  "cats.com",
  "souprecipes.com",
  "flowers.com",
  "animals.com",
  "catpictures.com",
  "favoritecats.com",
];

const googleSearch = (searchInput, database) => {
  const matches = database.filter((website) => website.includes(searchInput));

  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

// console.log(googleSearch("cat"));

module.exports = { googleSearch };
