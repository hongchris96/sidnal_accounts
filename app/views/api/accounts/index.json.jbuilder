@accounts.each do |acc|
  json.set! acc.id do
    json.partial! 'account', account: acc
  end
end