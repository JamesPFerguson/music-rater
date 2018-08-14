class CreateAlbums < ActiveRecord::Migration[4.2]
  def change
    create_table :albums do |t|
      t.integer :artist_id
      t.string :artist_name
      t.string :title
      t.string :art_url
      t.timestamps null: false
    end
  end
end
