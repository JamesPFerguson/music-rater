class ReviewsController < ApplicationController
  
  def create
    byebug
    user = User.create(username: params[:username])
    artist = Artist.find_or_create_by(name: params[:artist_name])
    album = Album.create(title: params[:album], art_url: params[:art_url],
       artist_name: params[:artist_name])
    artist.albums << album
    
  end
  
  def update
    
  end
  
  def destroy
    
  end
  
  def show
    @review = Review.find(params[:id])
    render json: @review
  end
  
  def index
    #
  end
  
end
