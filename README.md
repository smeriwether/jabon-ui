# Jabon 

A Modern SOAP Editor


## Why?

Through my work at [Policygenius](https://github.com/policygenius/) I deal with SOAP APIs quite often. 
Existing tools are hard to use, have too many features and just don't look nice. Jabon was created as a
solution to those problems. 

In reality, my experience with those tools just wasn't great so I built Jabon for 2 reasons:
1) To have some fun building something
2) To hopefully improve my specific situation.


## Running Locally

1. [Node](https://nodejs.org/en/)

2. Clone the Repo
  - `git clone git@github.com:smeriwether/jabon-ui.git`

3. Change to new directory
  - `cd jabon-ui`

4. Install dependencies
  - `yarn install`

5. Start the Rails server
  - `yarn start`

6. Open app in browser
  - `http://localhost:8080`


## Running Tests

I built Jabon using [TDD](https://en.wikipedia.org/wiki/Test-driven_development) (Test-Driven Development). 
This means that all new features are expected to be delivered with proper test coverage.

There are multiple levels of tests in Jabon:
- [Capybara](https://github.com/teamcapybara/capybara) Feature Tests (Ruby)
- [Jest](https://facebook.github.io/jest/)/[Enzyme](https://github.com/airbnb/enzyme) Unit Tests (Javascript)

All tests can be run with a single command:
- `make test`

All Ruby tests can be run with:
- `make ruby_test` OR `bundle exec rspec`

All Javascript tests can be run with:
- `make javascript_test` OR `yarn test`

All tests require dependencies to be installed and can be done with:
- `make install`


## Questions 

Will Jabon support feature XYZ?
- No, probably not. I am only a 1 person team so unless there is a really compelling reason I probably won't have time. Sorry!

Can I build feature XYZ?
- Sure! The purpose of Jabon was to remove bloat and I reserve the ability to reject any features. That being said,
  I will try to be as responsive as possible and will help guide the final solution to be something worth adding.

Is there a Code of Conduct?
- Yes, see [Code of Conduct](https://github.com/smeriwether/jabon/blob/master/CODE_OF_CONDUCT.md). 
  The COC is version 1.4 of the [Contributor Convenant](https://www.contributor-covenant.org/).

Why are the feature tests written in Ruby?
- I tried a few different Javascript feature testing libraries and could not get any of those working as I would expect.
  I am very comfortable with Capybara so I decided to go ahead with that instead of banging my head against other solutions.


## Architecture

Jabon is built with [Ruby on Rails](http://rubyonrails.org/) and [React](https://reactjs.org/) 

Tools used to build Jabon:
- [webpacker](https://github.com/rails/webpacker)
- [ace-editor](https://ace.c9.io/)
- [savon](https://github.com/savonrb/savon)

## Upcoming Features

https://trello.com/b/zdu946bv/jabon

## Copyright and License

Copyright © 2018 Stephen Meriwether. All Rights Reserved.

Licensed under the MIT License (the "License"). You may not use this work except in compliance with the License. 
You may obtain a copy of the License in the LICENSE file.
