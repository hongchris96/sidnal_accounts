@account_tags.each do |acctag|
  json.set! acctag.id do
    json.partial! 'acctag', acctag: acctag
  end
end