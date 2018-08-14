class UsersController < ApplicationController
  
  def create
    
  end
  
  def show
    @user = User.find(params[:id])
  end
  
end
