<p align="center">
    <h3 align="center">Hebsiburada React Challenge</h3>
    <br />
        <p align="center">
        <a href="">View Demo on Netlify</a>
        • 
        <a href="">Backend on Heroku</a>
    </p>
</p>


<!-- ABOUT THE PROJECT -->
## About The Project

![Hebsiburada React Challenge Screen Shot]()

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
* CSS Module

#### Backend
* [Express](https://expressjs.com/)
* [Redis](https://redis.io/)




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

<!-- CONTRIBUTING -->
## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

[Elif Nur Karakoç](https://tr.linkedin.com/in/elif-nur-karakoc) - elifnur.work@gmail.com

Project Link: [https://github.com/patika-hepsiburada-react-bootcamp/hepsiburada-bitirme-projesi-elifnurkarakoc](https://github.com/patika-hepsiburada-react-bootcamp/hepsiburada-bitirme-projesi-elifnurkarakoc)

<p align="right">(<a href="#top">back to top</a>)</p>