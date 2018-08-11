class ArtistsController < ApplicationController

  def show
    @artist = Artist.find(params[:id])
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
