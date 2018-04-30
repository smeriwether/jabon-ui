require 'spec_helper'

describe 'user can hide the project details' do
  it 'should not delete all details' do
    visit('/')

    wsdlInput = find('input[data-role="wsdl"]')
    header1KeyInput = find('input[data-role="header1-key"]')
    header1ValueInput = find('input[data-role="header1-value"]')
    header2KeyInput = find('input[data-role="header2-key"]')
    header2ValueInput = find('input[data-role="header2-value"]')

    # fill in project details
    wsdlInput.set('http://example.com')
    header1KeyInput.set('key-1')
    header1ValueInput.set('value-1')
    header2KeyInput.set('key-2')
    header2ValueInput.set('value-2')

    # hide project details
    find('div[data-role="expand"]').click

    # show project details
    find('div[data-role="expand"]').click

    expect(wsdlInput.value).to eq('http://example.com')
    expect(header1KeyInput.value).to eq('key-1')
    expect(header1ValueInput.value).to eq('value-1')
    expect(header2KeyInput.value).to eq('key-2')
    expect(header2ValueInput.value).to eq('value-2')
  end
end
