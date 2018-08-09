class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.string :name
      t.string :art_url
      t.string :artist
      t.timestamps null: false
    end
  end
end
