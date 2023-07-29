# React Design Patterns

This project is a collection of design patterns in React.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) >= 12.16.1
- [Yarn](https://yarnpkg.com/) >= 1.22.4

### Installing

```bash
yarn install
```

### Generating the api data (json-server)

This command will generate the `db.json` file needed to serve the api data.\
You can pass the optional `-u` flag to specify the number of users to generate.

```bash
yarn generate:db [-u] [number]
```

### Serving the api data (json-server)

```bash
yarn api
```

### Running the next app

```bash
yarn dev
```

## SOLID Principles

- [x] Single Responsibility Principle
- [x] Open-Closed Principle
- [ ] Liskov Substitution Principle
- [ ] Interface Segregation Principle
- [ ] Dependency Inversion Principle

### Single Responsibility Principle examples

Each code unit should have one and only responsibility.

Bad Example in [src/app/solid/srp/bad-example](src/app/solid/srp/bad-example/page.tsx)\
Good Example in [src/app/solid/srp/good-example](src/app/solid/srp/good-example/page.tsx)

### Open-Closed Principle examples

Components should be open for extension, but closed for modification.

Bad Example in [src/app/solid/ocp/bad-example](src/app/solid/ocp/bad-example/page.tsx)\
Good Example in [src/app/solid/ocp/good-example](src/app/solid/ocp/good-example/page.tsx)

### Liskov Substitution Principle examples

Components should be replaceable with instances of their subtypes without altering
the correctness of that program.

Bad Example in [src/app/solid/lsp/bad-example](src/app/solid/lsp/bad-example/page.tsx)\
Good Example in [src/app/solid/lsp/good-example](src/app/solid/lsp/good-example/page.tsx)

### Interface Segregation Principle examples

Soon

### Dependency Inversion Principle examples

Soon
