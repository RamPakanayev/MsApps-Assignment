# Image Search API Server

This is the server-side for the Pixabay Image Gallery. It sets up a Node.js server using Express.js to make requests to the Pixabay API. The server offers pagination and sorting functionality to the client.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Pagination](#pagination)
4. [Sorting](#sorting)
5. [Error Handling](#error-handling)
6. [Environment Variables](#environment-variables)
7. [Dependencies](#dependencies)
8. [Scripts](#scripts)
9. [Author](#author)


## Installation

To install the Pixabay Image Gallery server, follow these steps:

1. Install Node.js and npm. You can download and install them from here: [Node.js Downloads](https://nodejs.org/en/download/).
2. Clone this repository to your local machine.
3. Navigate to the server directory and run `npm install` to install all the project dependencies.

## Usage

Start the server by running `npm run dev` in the terminal. The server will start on http://localhost:5000.

The server exposes an endpoint `/api/images` that accepts `GET` requests. This endpoint expects a query parameter `category` to specify the type of images to fetch from the Pixabay API.

## Pagination

The server also supports pagination through `page` and `per_page` query parameters.

- `page` parameter determines the current page number.
- `per_page` parameter specifies how many items to display per page. By default, it is set to 9.

## Sorting

You can sort the images by their `id` or `date` by passing a `sort` query parameter with either `id` or `date` as its value.

## Error Handling

The server has error handling in place to return appropriate error messages and status codes when something goes wrong with the request.

## Environment Variables

This server uses the dotenv package for environment variable management. You need to create a `.env` file in the root of the server project and add your Pixabay API key to it:

PIXABAY_API_KEY=your_pixabay_api_key

## Dependencies

- axios for making http requests
- cors for handling Cross-Origin Resource Sharing
- dotenv for environment variable management
- express for building the server
- nodemon for automatic server restarts during development

## Scripts

- `"dev"`: runs the server with nodemon.

## Author

Ram Pakanayev
