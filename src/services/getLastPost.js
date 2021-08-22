export const getLastPost = async () => {
  return fetch("https://dev.to/api/articles?username=doulovera")
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};
