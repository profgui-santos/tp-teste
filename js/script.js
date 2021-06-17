var l;
function Clicar(){
    const cartao = document.getElementById('carnum').value;
    const codigo = document.getElementById('carcod').value;
    const nome = document.getElementById('carnome').value;
    const datam = document.getElementById('cardatam').value;
    const datay = document.getElementById('cardatay').value;
    var checkout = new DirectCheckout('F89FEE4218DCF46E9164069A4DD00EFCA0B5F29C8B14C62CBE18FF92946C2CB9', false);
    /* Em sandbox utilizar o construtor new DirectCheckout('PUBLIC_TOKEN', false); */
    const cardData = generateHash(cartao,codigo,nome,datam,datay);
    alert(cardData.cardNumber + ' ' + cardData.holderName);
    l = checkout.getCardHash(cardData, function(cardHash) {
        alert(cardHash);
        console.log(cardHash);
     }, function(error) {
         alert(error)
     });
     xhr.send(data);
}

  function generateHash(cartao,codigo,nome,datam,datay) {
    var cardData = {
        cardNumber: cartao,
        holderName: nome,
        securityCode: codigo,
        expirationMonth: datam,
        expirationYear: datay
      }
    return cardData;
  }

  const data = JSON.stringify({
    "dueDay": 21,
    "planId": "pln_1B939628D7C218B1",
    "chargeDescription": "Inscrição em Plano X",
    "creditCardDetails": {
      "creditCardHash":l
    },
    "billing": {
      "name": "Guilherme",
      "document": "36452806858",
      "email": "guiiivs@hotmail.com",
      "address": {
        "street": "string",
        "number": "string",
        "complement": "string",
        "neighborhood": "string",
        "city": "string",
        "state": "SP",
        "postCode": "03001000"
      },
      "secondaryEmail": "guiiivs@hotmail.com.br",
      "phone": "string",
      "birthDate": "1991-07-26",
      "notify": false
    },
    "split": [
      {
        "recipientToken": "583232806AAE73102E7CDA31D7DB7A48611974F11CE7F2A6C5878D264E107128",
        "percentage": 100,
        "amountRemainder": true,
        "chargeFee": true
      }
    ]
  });
/*
  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
    }
  });

  xhr.open("POST", "https://sandbox.boletobancario.com/api-integration/subscriptions");
  xhr.setRequestHeader("cookie", "AWSALBTG=K2Att0%2BRCg35xfC1BgynWb98ZouR26dMlCgfaqfdD%2FmeX73pSzYXpIfr6pz5jBLrfkXxLZoULpr4NveD5ncjUe5j1COz8u5hbPepnQhTiZyAYCMdwQGGIDOwV6vRg8ETDb5m4nvuXyoOveDU%2BAZhOQJrXrLGmwPiP6bIdHEN1TV8jLvZp7c%3D; AWSALBTGCORS=K2Att0%2BRCg35xfC1BgynWb98ZouR26dMlCgfaqfdD%2FmeX73pSzYXpIfr6pz5jBLrfkXxLZoULpr4NveD5ncjUe5j1COz8u5hbPepnQhTiZyAYCMdwQGGIDOwV6vRg8ETDb5m4nvuXyoOveDU%2BAZhOQJrXrLGmwPiP6bIdHEN1TV8jLvZp7c%3D");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("X-Api-Version", "2");
  xhr.setRequestHeader("X-Resource-Token", "583232806AAE73102E7CDA31D7DB7A48611974F11CE7F2A6C5878D264E107128");
  xhr.setRequestHeader("Authorization", "bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJndWlpaXZzQGdtYWlsLmNvbSIsInNjb3BlIjpbImFsbCJdLCJleHAiOjE2MTg1MzEwNzksImp0aSI6IjYwOExldlR4SzdpbU80LUZUT0ZGZHlwR2dSNCIsImNsaWVudF9pZCI6IlZBNFFRSmlGajhHSUkwOFQifQ.lDLb3ypk_bj9dZ1HQuJxIImCv63NHM4UqfrzCV2nrhP5cfAzwA0RS6ov8Rhx38uiOytstII9-ieiglE0zNyCdRb9ysYgnHEdwknDOwsq46DIdwnM3GA53h_i9w8yK6YJsSX1TlxaMZesIvDdMbW7SmEjNjcbQn_JctiojM0O8BtH0H44uK0lyblMCnISUNn7LszCfrDh7_WSqVpwtAjyz2rEMy9hADPlb7uqJfRa3tGnnpYz_hJhInfVEbhTWADlXCpTYcBjP7T1JCVwhAuxo3rlE85JUWn7Twjgxt3AZw4bL1h3_8MRaPwdJ1MOiH3C1OCZcud4rxn6b7Y0rIWxRA");44*/
