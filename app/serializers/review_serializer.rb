class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :rating, :content
  belongs_to :album
  belongs_to :artist
  belongs_to :user
end
