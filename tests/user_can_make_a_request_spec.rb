require 'spec_helper'

describe 'user can make a request' do
  let(:a_soap_request) do
    a_request(:post, /soap_requests/) do |req|
      body = JSON.parse(req.body)
      expected_body = {
        content: '<foo></foo>',
        wsdlLink: 'http://example.com',
        header1: { key: 'key-1', value: 'value-1' },
        header2: { key: 'key-2', value: 'value-2' }
      }

      body == expected_body
    end
  end

  before do
    stub_request(:post, /soap_requests/)
      .and_return(status: 200, body: { id: 'some-id', content: 'foo' }.to_json)
  end

  it 'should be able to fill in details and submit a request' do
    visit('/')

    # fill in content
    fill_in_editor('<foo>')

    # fill in project details
    find('input[data-role="wsdl"]').set('http://example.com')
    find('input[data-role="header1-key"]').set('key-1')
    find('input[data-role="header1-value"]').set('value-1')
    find('input[data-role="header2-key"]').set('key-2')
    find('input[data-role="header2-value"]').set('value-2')

    # submit request
    find('button[data-role="submit"]').click

    # Result view
    within 'div[data-role="result-item-some-id"]' do
      expect(page).to have_css('div[data-role="result-status"]', text: 'Success')
      expect(page).to have_editor_display(text: 'foo')
    end

    expect(a_soap_request).to have_been_made
  end

  def fill_in_editor(text)
    find('textarea.ace_text-input', visible: false).set(text)
  end

  def have_editor_display(options)
    have_css('.ace_content', options)
  end
end
