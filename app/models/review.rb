class Review < ActiveRecord::Base
  belongs_to :album
  belongs_to :user
  belongs_to :artist, through: :album
end
