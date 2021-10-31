<p align="center">
    <h3 align="center">Hepsiburada React Challenge</h3>
    <br />
        <p align="center">
        <a href="https://hepsiburada-react-challenge.netlify.app/">View Demo on Netlify</a>
        • 
        <a href="https://vast-bastion-74432.herokuapp.com/">Backend on Heroku</a>
        • 
        <a href="https://app.circleci.com/pipelines/github/elifnurkarakoc/hepsiburada-react-backend">Backend Circle CI</a>
    </p>
</p>


<!-- ABOUT THE PROJECT -->
## About The Project

- [x] Searching when at least two characters are entered according to the product name.
- [x] Product listing by filters and sorting, active status update in sort components.
- [x] Show the number of items in the cart in the cart badge. Sort the products in the cart by the date they were added. Modal appears when you want to delete the product.
- [x] Pagination.
- [x] Writing the Backend API with NodeJS.
- [x] Generate Mock Data
- [x] Product data is kept in memory
- [x] Basket data kept in local storage
- [x] Docker Container.
- [x] %70 Test Coverage



### Built With
#### Client
* [ReactJS](https://reactjs.org/)
* [Redux Toolkit](https://redux-toolkit.js.org/)
* CSS Module
* [Jest](https://jestjs.io/)
* [Testing Library](https://testing-library.com/)

#### Backend
* [Express](https://expressjs.com/)
* [Redis](https://redis.io/)
* [Chai](https://www.chaijs.com/)
* [Mocha](https://mochajs.org/)
* [Sucrase](https://github.com/alangpierce/sucrase)

#### Deployment
* [Netlify](https://www.netlify.com/)
* [Heroku](https://www.heroku.com/)
* [Upstash](https://upstash.com/)


[Backend Circle CI repo](https://github.com/elifnurkarakoc/hepsiburada-react-backend)
[![CircleCI](https://circleci.com/gh/elifnurkarakoc/hepsiburada-react-backend.svg?style=svg)](https://circleci.com/gh/elifnurkarakoc/hepsiburada-react-backend)
<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```
* docker

* redis
    ```
    docker pull redis
    ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/patika-hepsiburada-react-bootcamp/hepsiburada-bitirme-projesi-elifnurkarakoc.git
   cd hepsiburada-bitirme-projesi-elifnurkarakoc
   ```
2. Install NPM packages in first terminal for backend project 
   ```sh
   cd backend
   npm install
   ```
3. Create .env file and write your redis connection information
   ```sh
   REDIS_PORT=6379
   REDIS_HOST=redis
   ```
4. Run command
   ```sh
   npm start
   ```

5. Install NPM packages in second terminal for client project
   ```sh
   cd client
   npm install
   ```
6. Create .env file and write
   ```sh
   REACT_APP_BASE_ENDPOINT=http://localhost:5000
   ```
7. Run command
   ```sh
   npm start
   ```
<p align="right">(<a href="#top">back to top</a>)</p>

### Use with Docker
1. Clone the repo
   ```sh
   git clone https://github.com/patika-hepsiburada-react-bootcamp/hepsiburada-bitirme-projesi-elifnurkarakoc.git
   cd hepsiburada-bitirme-projesi-elifnurkarakoc
   ```
2. Build containers
   ```sh
   docker-compose up --build
   ```
<!-- CONTACT -->
## Contact

[Elif Nur Karakoç](https://tr.linkedin.com/in/elif-nur-karakoc) - elifnur.work@gmail.com

Project Link: [https://github.com/patika-hepsiburada-react-bootcamp/hepsiburada-bitirme-projesi-elifnurkarakoc](https://github.com/patika-hepsiburada-react-bootcamp/hepsiburada-bitirme-projesi-elifnurkarakoc)

<p align="right">(<a href="#top">back to top</a>)</p>