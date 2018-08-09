class CreateAlbumReviews < ActiveRecord::Migration
  def change
    create_table :album_reviews do |t|
      t.integer :album_id
      t.integer :review_id
      t.timestamps null: false
    end
  end
end
