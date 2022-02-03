# Javascript Terminal Demo

This demo can be used with the WisePOS E to show a checkout and payment experience.

## Features

* Branded using the logo in your Stripe branding settings.
* Displays products from your Stripe account.
* Displays the cart's line items on the reader's screen.
* Shows separate auth and capture.

## Running the demo

### One-time setup

1. 
    ```
    npm install
    cp .env.sample .env
    ```
1. Edit `.env` to set:
    * `REACT_APP_PK` - your Stripe [Publishable key](https://dashboard.stripe.com/account/apikeys).
    * `REACT_APP_SK` - your Stripe [Secret key](https://dashboard.stripe.com/account/apikeys).
    * `REACT_APP_CURRENCY` - currency to use for display and PaymentIntent.
    * `REACT_APP_ADMIN` - your Stripe [Account ID](https://dashboard.stripe.com/settings/account).

### Running locally
```
npm run dev
```
This will run the server and web app and open the app in your default browser. Changes to the web app will be reloaded automatically.

### Running on a server
```
npm start
```

#### Using Docker
A Dockerfile is included which will build the application and expose the server on port 8081.
