var myHeaders = new Headers();

const data = {
    "email": "technical_test@orangetoolz.com",
    "password": "qwerty",
    "agencyId": 53
}

console.log('-----')

const body_params = {
    method: 'POST',
    headers: myHeaders,
    body: data,
  };
fetch('https://agentgogo.pypepro.com/api/v1/authenticate', body_params)
.then(response =>   response.json())
  .then(response => console.log(JSON.stringify(response)))
  .catch(err => console.log(err));

