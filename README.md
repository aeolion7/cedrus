# nerds-plate

A lightweight starting point for building out a full stack application using
the NERDS (Node, Express, React/Redux, Database using SQL) technology stack.

## Instructions

The boilerplate application is ready to be served on port 3000 by typing
`npm start`, but currently only displays 'Hello, world!'. Some things need to
be done before the application can be built out:

1. A database must be created. For example, `createdb __DBNAMEHERE__`.
   In addition, the name of the database must be set as the name property in the
   `package.json` file in the root application directory.
2. The database models must also be defined (in `/server/db/models/`) and the
   associations must be set (in `/server/db/models/index.js`). Currently, a
   `Test` model is currently defined (in `/server/db/models/test.js`), and
   should be removed before building an application using this boilerplate.
3. A connected Redux store is currently set up, but there are no action
   constants or action creators. The initial state is empty and the reducer
   currently only returns the passed-in state argument, and so these must all be
   set up by the developer (in `/client/store/`).
4. API routes can be constructed in (`/server/api/`). There is a central route
   handler file at `/server/api/index.js`.
5. For convenience, a central component export file has been created
   (at `/client/components/index.js`). This enables importing components from
   this central export file, rather than having to find which component is
   exported from which file.
