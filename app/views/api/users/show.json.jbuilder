json.extract! @user, :id, :username, :email, :created_at

@user.reviews.each do |review|
    json.reviews do 
        json.set! review.id do
            json.extract! review, :id, :body, :created_at
        end
    end
end 

@user.bookings.each do |booking|
    json.bookings do
        json.set! booking.id do
            json.extract! booking, :id, :spot_id, :check_in, :check_out, :guest_number, :total_price
        end
    end
end  


