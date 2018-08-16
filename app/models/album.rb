class Album < ActiveRecord::Base
  has_many :reviews
  belongs_to :artist
end
