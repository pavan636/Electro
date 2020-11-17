# Electro
MERN SHOPPING CART



## Features
- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)


### Env Variables
Create a .env file in then root and add the following
```
NODE_ENV = 
PORT = 
MONGO_URI = 
JWT_SECRET = 
PAYPAL_CLIENT_ID = 



### Install Dependencies (frontend & backend)
```
npm install
cd frontend
npm install
```
### Run
```
# Run frontend (:3000) & backend (:5000)
npm run dev
# Run backend only
npm run server
```
## Build & Deploy
```
# Create frontend prod build
cd frontend
npm run build
```

### Seed Database
You can use the following commands to seed the database with some sample users and products as well as destroy all data
```
# Import data
npm run data:import
# Destroy data
npm run data:destroy
```


