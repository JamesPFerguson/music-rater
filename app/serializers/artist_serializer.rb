class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name, :page_views
  has_many :albums
end
