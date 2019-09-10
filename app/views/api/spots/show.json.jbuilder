json.extract! @spot, :id, :title, :host_id, :description, :check_in, :check_out, :on_arrival, :max_capacity, :lat, :lng, :tent, :sites, :parking, :campfire, :pets, :toilet, :water, :shower, :hiking, :swimming, :fishing, :wildlife, :price

json.photoUrls @spot.photos.map { |file| url_for(file) }
json.reviewIds @spot.reviews.pluck(:id)

@spot.reviews.includes(:user).each do |review|
  json.reviews do
    json.set! review.id do
      json.partial! 'api/reviews/review', review: review
    end
  end

  json.authors do
    json.set! review.user.id do
      json.extract! review.user, :id, :username
    end
  end
end