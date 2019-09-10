# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  spot_id    :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ApplicationRecord
    validates :user_id, :spot_id, :body, presence: true

    belongs_to :user
    belongs_to :spot

end
