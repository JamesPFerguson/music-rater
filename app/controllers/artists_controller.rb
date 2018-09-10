class ArtistsController < ApplicationController

  def show
    @artist = Artist.find(params[:id])
    @artist.page_views += 1
    @artist.save
    render json: @artist
  end

  def create

  end

  def update

  end

  def destroy

  end

  def index

  end

end
