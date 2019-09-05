json.extract! @spot, :id, :title, :host_id, :description, :check_in, :check_out, :on_arrival, :max_capacity, :lat, :lng, :tent, :sites, :parking, :campfire, :pets, :toilet, :water, :shower, :hiking, :swimming, :fishing, :wildlife, :price
json.photoUrls @spot.photos.map { |file| url_for(file) }