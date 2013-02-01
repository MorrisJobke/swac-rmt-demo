# [SWAC](https://github.com/rkusa/swac)'s [RM/T Adapter](https://github.com/kabum/swac-rmt) Demo

## Installation

### Dependencies

* [Node.js](http://nodejs.org/) (at least v0.8)
* [NPM](https://npmjs.org/) (should be included in Node.js)
* [PostgreSQL](www.postgresql.org)

### Installation

```bash
git clone git@github.com:kabum/swac-rmt-demo.git
cd swac-rmt-demo
npm install
```

## Usage

Start the server with

```bash
POSTGRES=tcp://{user}@127.0.0.1/postgre node server
```

Where **{user}** should be your PostgreSQL username. Before starting the server the *postgre* database should already exist!

The demo can be accessed through [http://localhost:3000/](http://localhost:3000/).
