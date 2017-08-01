This is Jeremy's my reads project for Udacity's React Fundamentals course.

## Install & Start Project
* Clone [Jeremy's project](https://github.com/jeremyjgyoung/jeremy-young-myreads-project) by typing `git clone git@github.com:jeremyjgyoung/jeremy-young-myreads-project.git` in your command line. If this doesn't work, you can manually download the ZIP file and unzipping the file.
* Step into the project folder with `cd jeremy-young-myreads-project` in command line.
* Install dependencies by typing `npm install` or `yarn start` into command line.
* Start a local server by typing `npm start` or `yarn start` into command line.
* Navigate to [your local server](http://localhost:3000/) on a web browser, which by default should be http://localhost:3000/.
* Note you must have [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/lang/en/docs/install/) installed on your machine for the `npm` or `yarn` keyword to work in your command line, respectively.

## Files
There are three main files to check out: App.js, ListBooks.js, and SearchBooks.js.
```
+-- src/
 |-- App.js - This is the root of the app.
 |-- ListBooks.js - This includes code for listing books in separate shelves.
 |-- SearchBooks.js - This includes code for searching for new books to add.
 ```

## A Note on Search Results
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your search for Underwater Basket Weaving doesn't come back with any results.
