class ReviewsController < ApplicationController
  
  def create
    byebug
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
