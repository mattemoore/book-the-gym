[![Book the latest gym slot](https://github.com/mattemoore/book-the-gym/actions/workflows/book-the-gym.yml/badge.svg)](https://github.com/mattemoore/book-the-gym/actions/workflows/book-the-gym.yml)

# book-the-gym

1. Book the gym as soon as target slot is available so we can stay in shape this winter

## Run locally

1. Create file `cypress/fixtures/data.json` that will contain the form data to automatically (format below)

## Run on Github Actions

1. Fork this repo
2. Add a Github secret with name `FORM_DATA` and value that is json containing form data (format below)

## Form Data

```json
{
  "name": "First Last",
  "email": "my.email.address@gmail.com",
  "apt": "622704",
  "url": "http://mybuildingsite.com/fitness-room-booking/",
  "password": "ChangeMe"
}
```
