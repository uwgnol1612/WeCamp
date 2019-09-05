@spots.each do |spot|
  json.set! spot.id do
    json.extract! spot, :id, :title, :lat, :lng, :tent, :price
    json.photoUrl url_for(spot.photos.first)
    # json.reviewIds []
  end
end