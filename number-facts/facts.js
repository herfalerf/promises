// 1
// let promiseFav = axios.get("http://numbersapi.com/9?json");
// promiseFav.then((data) => console.log(data.data));

// 2
// let promiseBatch = axios.get("http://numbersapi.com/1..5?json");
// promiseBatch.then((data) => console.log(data.data));

// 3
let $facts = $("#facts");

axios
  .get("http://numbersapi.com/9?json")
  .then((p1) => {
    $facts.append(`<p>${p1.data.text}</p>`);
    return axios.get("http://numbersapi.com/9?json");
  })
  .then((p2) => {
    $facts.append(`<p>${p2.data.text}</p>`);
    return axios.get("http://numbersapi.com/9?json");
  })
  .then((p3) => {
    $facts.append(`<p>${p3.data.text}</p>`);
    return axios.get("http://numbersapi.com/9?json");
  })
  .then((p4) => {
    $facts.append(`<p>${p4.data.text}</p>`);
  });
