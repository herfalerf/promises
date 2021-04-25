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

// axios
//   .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
//   .then((deck) => {
//     return axios.get(
//       `https://deckofcardsapi.com/api/deck/${deck.data.deck_id}/draw/?count=1`
//     );
//   })
//   .then((card) => {
//     console.log("this is card 1");
//     console.log(card.data.cards[0].value);
//     console.log(card.data.cards[0].suit);
//     return axios.get(
//       `https://deckofcardsapi.com/api/deck/${card.data.deck_id}/draw/?count=1`
//     );
//   })
//   .then((card) => {
//     console.log("this is card 2");
//     console.log(card.data.cards[0].value);
//     console.log(card.data.cards[0].suit);
//   });

//3
let deckId;
const $cardBtn = $("#get_card");
const $cardPile = $("#card_pile");

$(function () {
  axios
    .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then((deck) => {
      console.log(deck.data.deck_id);
      return (deckId = deck.data.deck_id);
    });
});

function getCard() {
  axios
    .get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then((card) => {
      console.log(card.data.cards[0].value);
      console.log(card.data.cards[0].suit);
      console.log(card.data.remaining);
      $cardPile.append(`<div class='card'>
                            <div>${card.data.cards[0].value}</div>
                            <div>${card.data.cards[0].suit}</div>
                        </div>`);
    })
    .catch((err) => {
      console.log(`Oops, there was a problem :( ${err}`);
    });
}

$cardBtn.on("click", getCard);
