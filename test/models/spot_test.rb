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

require 'test_helper'

class SpotTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
