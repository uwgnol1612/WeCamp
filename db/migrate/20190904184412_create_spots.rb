class CreateSpots < ActiveRecord::Migration[5.2]
  def change
    create_table :spots do |t|
      t.string :title, null:false
      t.text :description, null: false 
      t.string :check_in, null: false 
      t.string :check_out, null: false 
      t.text :on_arrival, null: false
      t.integer :max_capacity, null: false 
      t.float :lat, null: false
      t.float :lng, null: false
      t.boolean :tent
      t.integer :sites, null: false
      t.boolean :parking
      t.boolean :campfire
      t.boolean :pets
      t.boolean :campfire
      t.boolean :toilet
      t.boolean :water
      t.boolean :shower
      t.boolean :hiking
      t.boolean :swimming
      t.boolean :fishing
      t.boolean :wildlife
      t.integer :price, null: false
      t.integer :host_id, null: false
      t.timestamps
    end
    add_index :spots, :title, unique: true
  end
end
