export function filterData(searchText, allRestaurant) {
  if (!searchText) {
    return allRestaurant;
  }

  const filteredData = allRestaurant.filter((restro) => {
    return restro?.card?.card?.info?.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });
  return filteredData;
}
