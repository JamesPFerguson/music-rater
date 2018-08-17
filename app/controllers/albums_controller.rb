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
    reviews = album.reviews
    render json: reviews
  end

  def index

  end

end
