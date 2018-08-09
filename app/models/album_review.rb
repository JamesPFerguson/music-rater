class AlbumReview < ActiveRecord::Base
  belongs_to :album
  belongs_to :review
end
