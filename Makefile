install: js_install ruby_install
test: js_test ruby_test

js_install:
	yarn install

ruby_install:
	bundle install

js_test:
	yarn test

ruby_test:
	bundle exec rspec
