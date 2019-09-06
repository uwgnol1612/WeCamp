# == Schema Information
#
# Table name: spots
#
#  id           :bigint           not null, primary key
#  title        :string           not null
#  description  :text             not null
#  check_in     :string           not null
#  check_out    :string           not null
#  on_arrival   :text             not null
#  max_capacity :integer          not null
#  lat          :float            not null
#  lng          :float            not null
#  tent         :boolean
#  sites        :integer          not null
#  parking      :boolean
#  campfire     :boolean
#  pets         :boolean
#  toilet       :boolean
#  water        :boolean
#  shower       :boolean
#  hiking       :boolean
#  swimming     :boolean
#  fishing      :boolean
#  wildlife     :boolean
#  price        :integer          not null
#  host_id      :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Spot < ApplicationRecord
    validates :title, :description, :check_in, :check_out, :on_arrival, :max_capacity, :lat, :lng, :sites, :price, :host_id, presence: true
    validates :tent, :parking, :campfire, :pets, :toilet, :water, :shower, :hiking, :swimming, :fishing, :wildlife, inclusion: [true, false]

    has_many_attached :photos


    def self.in_bounds(bounds)
        
      self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng > ?", bounds[:southWest][:lng])
      .where("lng < ?", bounds[:northEast][:lng])
      
    end 

end
