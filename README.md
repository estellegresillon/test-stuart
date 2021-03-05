# Stuart test

## Install dependencies

`yarn install`

## Start the app

`yarn dev`

## Step One (3-4 hours)

It was a very fun step to do as I always have been using CRA to bootsrap my react apps. Right after I received the test, reading this bonus point made me want to start right away to try it !

Issues :

- I had issues with the Google Maps API because I already have used my free Google API account and had a problem with the billing. I had to create a new gmail account to do the test...
- I spent too many time on trying to code the map without any wrapper so I gave it up : typescript was yelling at me so much with everything I was trying to do :( (like calling window.google, and so on...)

## Step Two (2-3 hours)

I spent a lot of time organising my code, creating my components, build my theme and CSS. Hesitated between using apollo/graphql and redux with the rest api but as I said during the interview I never used it before and didn't feel that bold as I already spent a lot of time on the first step. Besides, I enjoy using Redux Saga for data fetching because of the way you can call actions and side-effects with the generators so easily.

Issues :

- I stumbled upon a new typing error with saga's generators. After some researches it seemed like the bug was on Typescript's side and we now have to use typed-redux-saga to bypass it ! (the yield was of type unknown no matter what I did)

## Step Three & Four (1h)

These were the easiest steps : with Redux Saga it was so easy to develop that I didn't do two separate commit for each step.

Issues :

- I didn't encounter any issues during these 2 steps

## Step Five

Suggested features :

- Add a loading next to (or inside) each input while the geocoding request is pending.
- Use Google Places to have a complete list of world-wide address.
- Use Google Autocomplete to enhance the user experience and permit the user to choose the wished address in a select input.
- Give the job a delivery/pickup time and assign a delivery guy.
- Click on the marker to display a pop-in with the job's additionnal datas.
- Check if the job is already scheduled or not... the possibilities are endless.

Concerning the code architecture, I should add some unit tests, a prettierrc, an eslintrc, but atm I am way overtime and from what I did I believe you trust I can achieve these tasks !

## Conclusion

It feels like I may have spent a lot of time doing the test but in fact I learned many things and thought it was a lot of fun !

I am looking forward to hear from you guys to know the cleanest way to use Google Maps without any libraries.

Finally, when I saw the bonus asking to dispatch the call api when the user stops typing I first thought it wasn't necessary to keep the onBlur event. I changed my mind with as you can see in my last commit and kept both ways of doing it.
