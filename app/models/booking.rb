# == Schema Information
#
# Table name: bookings
#
#  id           :bigint           not null, primary key
#  check_in     :string           not null
#  check_out    :string           not null
#  user_id      :integer          not null
#  spot_id      :integer          not null
#  total_price  :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  guest_number :integer
#

class Booking < ApplicationRecord
    validates :check_in, :check_out, :user_id, :spot_id, :total_price, :guest_number, presence: true

    belongs_to :spot
    belongs_to :user
end
