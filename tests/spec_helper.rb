require 'capybara'
require 'capybara/dsl'
require 'capybara/rspec'
require 'capybara-webkit'
require 'colorize'
require 'headless'
require 'pry'
require 'rest-client'
require 'selenium-webdriver'
require 'webmock/rspec'

Dir[File.join(File.dirname(__FILE__), 'support', '**/*.rb')].each { |f| require f }

WebMock.disable_net_connect!(allow_localhost: true)

Capybara::Webkit.configure do |config|
  config.block_unknown_urls
  config.allow_url 'http://localhost:3000'
end

Capybara.register_driver :chrome do |app|
  client = Selenium::WebDriver::Remote::Http::Default.new
  client.timeout = 120

  Capybara::Selenium::Driver.new(
    app,
    browser: :chrome,
    http_client: client,
    desired_capabilities: {
      'chromeOptions' => {
        'binary' => ENV['CI'] ? '/usr/bin/google-chrome' : nil,
        'args' => %w[window-size=3840,2160 --no-sandbox]
      }.compact
    }
  )
end

Capybara.app = FakeJabon
Capybara.app_host = 'http://localhost:8080'
Capybara.run_server = true
Capybara.server_host = 'localhost'
Capybara.server_port = '3000'
Capybara.default_driver = :chrome
Capybara.default_max_wait_time = 10

RSpec.configure do |config|
  config.include Capybara::DSL

  config.expect_with :rspec do |expectations|
    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end

  config.mock_with :rspec do |mocks|
    mocks.verify_partial_doubles = true
  end

  config.after(:each) do |example|
    Capybara.current_session.driver.quit if example.exception
  end
end
