require 'sinatra'
require 'rest-client'

class FakeJabon < Sinatra::Application
  set :logging, false

  before do
    headers(
      'Access-Control-Allow-Origin' => '*',
      'Access-Control-Allow-Methods' => %w[OPTIONS GET POST PUT]
    )
  end

  get '/*' do
    query = request.query_string ? "?#{request.query_string}" : ''

    RestClient.get("http://fake-jabon#{request.path}#{query}") do |response|
      response
    end
  end

  post '/*' do
    params = request.params

    puts "[INFO] #{params}".blue if ENV['VERBOSE_QUERIES']

    RestClient.post("http://fake-jabon#{request.path}", params) do |response|
      status response.code
      body response.body
    end
  end

  options '*' do
    response.headers['Allow'] = 'HEAD,GET,PUT,DELETE,OPTIONS'
    response.headers['Access-Control-Allow-Headers'] =
      'X-Requested-With, X-HTTP-Method-Override, Content-Type, Cache-Control, Accept, Authorization, X-Token'
  end
end
