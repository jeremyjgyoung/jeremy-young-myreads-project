This is Jeremy's my reads project for Udacity's React Fundamentals course.

## Installing & Starting Project
* Clone [Jeremy's Project](https://github.com/jeremyjgyoung/jeremy-young-myreads-project).
* Install dependencies by typing `npm install` into command line.
* Start a local server by typing `npm start` into command line.
* Navigate to [your local server](http://localhost:3000/), which by default should be http://localhost:3000/.
* You must have node package manager installed on your machine for the `npm` keyword to work in your command line.

## Files
There are three main files to check out: App.js, ListBooks.js, and SearchBooks.js.
```
+-- src/
 |-- App.js - This is the root of the app.
 |-- ListBooks.js - This includes code for listing books in separate shelves.
 |-- SearchBooks.js - This includes code for searching for new books to add.
 ```

## A Note on Search Results
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
