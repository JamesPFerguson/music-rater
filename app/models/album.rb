class Album < ActiveRecord::Base
  has_many :reviews, through: :album_reviews
  has_many :album_reviews
  belongs_to :artist
end
