@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :body, :spot_id, :user_id, :created_at, :updated_at
  end
end