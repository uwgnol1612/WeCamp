json.booking do
  json.extract! @booking, :id, :spot_id, :user_id, :check_in, :check_out, :total_price, :guest_number
end