@tags.each do |t|
  json.set! t.id do
    json.partial! 'tag', tag: t
  end
end