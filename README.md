# Account_book_app

## Preview


This is the ReactJs Node Full Stack Account Book App With Postgres & Prisma.

The App will contain Authentication with cookie sessions and some CRUD functionality. I will store the session in our database server-side. Also, use Prisma (ORM) to interact with our database.

*
ReactJs / Sass Modules for Frontend
Node ExpressJs for Backend
Prisma as our ORM for our database (Psql)


## Work Flow


### 1. Start a React project: npx create-react-app my-app


### 2. Create Home Page (all its components):
 * components > Create Customer.js


### 3. Backend Setup
 * Express.js Setup (Session , Cors)


### 4. Prisma Setup
 * npm prisma init
 
 ```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/mbdb"
PORT = 5000
```

### 5. Auth Controller & Auth Routes
```
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.get("/whoami", authController.auth_user);
router.post("/auth", authController.auth_login);
router.post("/logout", authController.auth_logout);
router.post("/register", authController.auth_register);

module.exports = router;
```

### 6. React-Query & Axios Setup and Hooks
* npm i axios luxon
* npm i react-query --save-dev
* utils > Axios.js
* queries > user.js


### 7. Protected Routes & Context
* context > AuthProvider.jsx
* components > protectedRoutes.jsx
```
const ProtectedRoutes = () => {
  const { auth } = useContext(AuthContext);
  const authHandler = () => {
    switch (auth) {
      default:
        return (
          <MainContainer>
            <Title>Loading..</Title>
          </MainContainer>
        );
      case true:
        return <Outlet />;
      case false:
        return <Navigate to="/auth" />;
    }
  };

  return authHandler(auth);
};
```

### 8. Login & Logout Function 
 * pages > Auth.jsx


### 9. Express User Controller
 * controllers > userController.js
 ```
 const user_update_meta = async (req, res) => {
  const { firstName, lastName } = req.body;
  //IF USER IS LOGGED IN
  if (req.session.userId) {
    try {
      await prisma.user.update({
        where: {
          id: req.session.userId,
        },
        data: {
          firstName: firstName,
          lastName: lastName,
        },
      });
      res.status(200).send("Updated");
    } catch (e) {
      console.log(e);
      res.status(500).send("Error {Update Meta}");
    }
  } else {
    //IF NOT
    res.status(401).send("Please Login");
  }
};

//UPDATE PW
const user_update_password = async (req, res) => {
  const { password, oldPassword } = req.body;
  console.log("UPDATE PW");
  let user;
  if (req.session.userId) {
    //FIND USER
    try {
      user = await prisma.user.findUnique({
        where: {
          id: req.session.userId,
        },
      });
    } catch {
      res.status(500).send("err");
      return;
    }
  } else {
    res.status(401).send("Please Login");
  }

  //IF USER IS FOUND
  if (user) {
    const isPassCorrect = await bcrypt.compare(oldPassword, user.password);
    if (isPassCorrect) {
      //hash and salt new pw
      const saltRounds = 10;
      let newPassword = await bcrypt.hash(password, saltRounds);
      try {
        await prisma.user.update({
          where: {
            id: req.session.userId,
          },
          data: {
            password: newPassword,
          },
        });
        //DELETE ALL SESSIONS (LOGOUT EVERYONE)
        try {
          // req.session.destroy();
          await prisma.session.deleteMany({
            where: {
              data: {
                endsWith: `,"userId":${req.session.userId}}`,
              },
            },
          });
          res.clearCookie("sess").status(200).send("Updated");
        } catch {
          res.status(500).send("err deleting sessions");
        }
      } catch {
        res.status(500).send("Cannot update pw");
      }
    } else {
      //IF PW IS NOT CORRECT
      res.status(403).send("wrong pw");
    }
  } else {
    res.status(401).send("please log in");
  }
};

module.exports = { user_update_meta, user_update_password };
```


### 10. Setting Page Update Password
 * pages > Settings.jsx
 * controllers > userController.js


### 11. Trasactions API & Categories API (express.js)
* Backend:
controllers > transactionController.js / categoriesController.js
routes > transactionRoutes.js / categoriesRoutes.js
queries > transaction.js / category.js
* Frontend:
pages > Transactions.jsx / AddTransactionForm.jsx
transactionComponents > Transactions.module.scss



## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
