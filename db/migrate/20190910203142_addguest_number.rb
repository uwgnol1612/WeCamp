class AddguestNumber < ActiveRecord::Migration[5.2]
  def change
    add_column :bookings, :guest_number, :integer
  end
end
