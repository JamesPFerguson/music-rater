class AlbumsController < ApplicationController

  def create

  end

  def update

  end

  def destroy

  end

  def show
    #renders only an album
    album = Album.find(params[:id])
    album.page_views += 1
    reviews = album.reviews
    render json: reviews
  end

  def index

  end

end
