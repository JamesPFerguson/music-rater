class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :title, :art_url , :artist_id, :artist_name
end
