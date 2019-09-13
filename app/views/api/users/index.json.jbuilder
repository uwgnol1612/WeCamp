@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username, :email, :created_at

      user.reviews.each do |review|
        json.reviews do 
            json.set! review.id do
                json.extract! review, :id, :body, :spot_id, :user_id, :created_at
            end
        end
      end
  
    user.bookings.each do |booking|
        json.bookings do
            json.set! booking.id do
                json.extract! booking, :id, :spot_id, :check_in, :check_out, :guest_number, :total_price, :user_id
            end
        end
    end 
  end

end