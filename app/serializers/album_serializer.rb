class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :artist_id, :title, :art_url
end
