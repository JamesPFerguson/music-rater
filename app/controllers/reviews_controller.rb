class ReviewsController < ApplicationController
  
  def create
    # creates everything associated with a review and assigns the neccessary relations.
    # returns a JSON review
    user = User.create(username: params[:username])
    artist = Artist.find_or_create_by(name: params[:artist_name])
    artist.page_views ? nil : artist.page_views = 0
    album = Album.create(title: params[:album], art_url: params[:art_url],
       artist_name: params[:artist_name])
    album.page_views ? nil : artist.page_views = 0
    artist.albums << album
    @review = Review.create(rating: params[:rating], content: params[:content], user_id: user.id)
    album.reviews << @review

    AlbumReview.create(album_id: album.id, review_id: @review.id)
    render json: @review
  end
  
  def update
    
  end
  
  def destroy
    
  end
  
  def show
  end
  
  def index
    #returns every review.
    @reviews = Review.all
    render json: @reviews
  end
  
end
