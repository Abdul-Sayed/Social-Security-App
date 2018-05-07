# Screen Shots
![home](https://user-images.githubusercontent.com/29248268/39676043-6acb9f90-5118-11e8-96d9-9d5a93cf92f3.JPG)
- - -
![infoinput](https://user-images.githubusercontent.com/29248268/39676070-dd22058e-5118-11e8-9c37-8733465ba0d0.JPG)
- - -
![results](https://user-images.githubusercontent.com/29248268/39676074-ef28d294-5118-11e8-9863-73a84493102c.JPG)
- - -
![registration](https://user-images.githubusercontent.com/29248268/39676079-feaaf2b0-5118-11e8-87a8-a8ff779eb62c.JPG)
- - -
![dashboard](https://user-images.githubusercontent.com/29248268/39676083-0d54a5c2-5119-11e8-9049-b232933108af.JPG)
- - -
# SSWhen

SSWHEN is a social security calculator that will help you figure out how much retirement income you’ll receive at different claiming ages so you can determine when the optimal age to claim your benefits.

## Getting Started

SSWhen is an ionic project using typescript. The backend API uses MongoDB as a data source for a loopback api server. The corresponding backend server can be found at: 

```
https://github.com/SoftStackFactory/SSWHEN-bk
```



### Prerequisites

To begin make sure node and npm are installed. Please make sure latest Node 6 LTS and NPM 3+ are installed. In addition, make sure that you have [Ionic CLI](https://ionicframework.com/docs/cli/) installed locally. This project was uses Ionic 3.x. 

```
npm install -g ionic
```


### Branches

SSWHEN employs a git flow methodology for branch naming. When creating new branches, work off of develop only.

`master` - Current release working production branch

`develop` - Next release development branch.

For new features, use the convention: `/feature/**feature-name**`

For hotfixes, use the convention: `/bug/**bug-name**`


### Installing

Clone the remote repository

```
git clone https://github.com/SoftStackFactory/SSWHEN
```

From within the `SSWHEN` directory, run `npm install` to install all dependencies.

```
npm install
```

Once that completes, use `ionic serve` to get a local copy running

```
ionic serve
```

This should deploy an instance of the app running locally at:

```
http://localhost:8100/
```


## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Ionic](https://ionicframework.com/)
* [Angular](https://angular.io/)
* [MongoDB](https://www.mongodb.com/)
* [Loopback](http://loopback.io/)
* [Chart.js](http://www.chartjs.org/)

## Authors

See also the list of [contributors](https://github.com/SoftStackFactory/SSWHEN/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
