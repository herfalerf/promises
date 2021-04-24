//1
// axios
//   .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
//   .then((deck) => {
//     return axios.get(
//       `https://deckofcardsapi.com/api/deck/${deck.data.deck_id}/draw/?count=1`
//     );
//   })
//   .then((card) => {
//     console.log(card.data.cards[0].value);
//     console.log(card.data.cards[0].suit);
//   });

//2

axios
  .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
  .then((deck) => {
    return axios.get(
      `https://deckofcardsapi.com/api/deck/${deck.data.deck_id}/draw/?count=1`
    );
  })
  .then((card) => {
    console.log("this is card 1");
    console.log(card.data.cards[0].value);
    console.log(card.data.cards[0].suit);
    return axios.get(
      `https://deckofcardsapi.com/api/deck/${card.data.deck_id}/draw/?count=1`
    );
  })
  .then((card) => {
    console.log("this is card 2");
    console.log(card.data.cards[0].value);
    console.log(card.data.cards[0].suit);
  });
