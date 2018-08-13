class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :content
  belongs_to :album
  belongs_to :artist, through: :album
  belongs_to :user
end
