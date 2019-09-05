class Api::SpotsController < ApplicationController

    def index
        @spots = Spot.with_attached_photos.all
        render :index
    end 

    def show
        @spot = Spot.with_attached_photos.find(params[:id]) 
        render :show
    end 

    def spot_params
        params.require(:spot).permit(photos:[])
    end 

end