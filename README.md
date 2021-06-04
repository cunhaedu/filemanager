<p align="left">
   <img src=".github/ibm_cos.png" width="190" height="200"/>
</p>

# Filemanager

Learning how to work with IBM Cloud Object Storage and MulterS3 to store files.

# :pushpin: Table of Contents

* [Features](#rocket-features)
* [Installation](#construction_worker-installation)
* [Getting Started](#runner-getting-started)
* [Build](#runner-build)
* [Technologies](#rocket-technologies)

# :rocket: Features

* Files Upload to IBM Cloud Object Storage

# :construction_worker: Installation

**You need to install [Node.js](https://nodejs.org/en/download/) and [Yarn](https://yarnpkg.com/) first, then in order to clone the project via HTTPS, run this command:**


```
git clone git@github.com:cunhaedu/filemanager.git
```

**Install dependencies**

```
yarn install
```
Or

```
npm install
```

Create your environment variables based on the examples of ```.env.example```

```
cp .env.example .env
```

**Setup a database**

Install [Postgres](https://www.postgresql.org/) to create a database and create a database, then you should modify the ```.env``` with your credentials

**Create an account in IBM and configure a IBM Cloud Object Storage bucket**

For tests, you can create a free account to use the IBM COS. After create an account, create and configure a bucket, then, get your credentials and put them in ```.env```.


# :runner: Getting Started

Run the transactions in order to configure the database schema:
```
yarn typeorm migration:run
```

Run the following command in order to start the application in a development environment:
```
yarn dev:server
```

# :runner: Build
Run the following command in order to convert the .ts file to .js file in a folder called dist:
```
yarn build
```

Run the following command in order to start the application in a production environment:
```
yarn start
```

## :rocket:  Technologies

This project use the following technologies:

* [IBM Cloud Object Storage](https://www.ibm.com/br-pt/cloud/object-storage)
* [multer-s3](https://github.com/badunk/multer-s3)
* [Typescript](https://www.typescriptlang.org/)
