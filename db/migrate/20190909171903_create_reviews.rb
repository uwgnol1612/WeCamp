class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :spot_id, null: false
      t.text :body, null: false

      t.timestamps
    end
    add_index :reviews, :user_id 
    add_index :reviews, :spot_id
  end
end
