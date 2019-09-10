@spots.each do |spot|
  json.set! spot.id do
    json.extract! spot, :id, :title, :lat, :lng, :tent, :price, :max_capacity, :tent, :sites, :parking, :campfire, :pets, :toilet, :water, :shower, :hiking, :swimming, :fishing, :wildlife
    json.photoUrl url_for(spot.photos.first)
    json.photoUrls spot.photos.map { |file| url_for(file) }
    json.reviewIds []
  end
end
