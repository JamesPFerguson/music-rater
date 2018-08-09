class CreateAlbumReviews < ActiveRecord::Migration
  def change
    create_table :album_reviews do |t|

      t.timestamps null: false
    end
  end
end
