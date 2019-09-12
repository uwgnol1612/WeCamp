class Api::ReviewsController < ApplicationController
  before_action :require_logged_in

  def show 
    @review = Review.find(params[:id])
    render :show
  end 

  def create
    @review = current_user.reviews.new(review_params)

    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def index 
    @reviews = Review.all
    render :index
  end 

  def update

    @review = current_user.reviews.find(params[:id])

    if @review.update(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = current_user.reviews.find(params[:id])

    if @review.destroy
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  private

  def review_params
    params.require(:review).permit(:body, :spot_id)
  end
end