class AlbumsController < ApplicationController

  def create

  end

  def update

  end

  def destroy

  end

  def show
    #renders only an album
    @album = Album.find(params[:id])
    render json: @album
  end

  def index

  end

end
