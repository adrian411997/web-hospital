# ProductsForYou Info

This a short documentation about my app for IT-Crowd.

## Tech what I used

- React
- Node
- Express
- Bootstrap
- Redux-toolkit
- React-redux
- React-router V6

## What does my project?

This app show products stored in a database that is placed in Heroku. You can see information about that products clicking in "View more details" button.
Also, you can create, change information or delete a product, but all these functions are only for the administrator and all these actions affect the database and consequently the Front End. You can access to all these functions through the Login In button. The admin's username is **User** and the password is **12345**. You can create a brand if yours is not in the database.

## How work my api?

My api delivers information throught the next endpoints:

- api/products
- api/brand

You can get, post, delete and put in products but in brand just get and post.

## Can I run locally in my pc?

Yes, the backend is configure for running locally , just install the dependencies in both folders (api and client):

```bash
npm install
```

Then, in the api folder:

```bash
nodemon
```

And in client folder:

```bash
npm start
```

### Thank you for come!
