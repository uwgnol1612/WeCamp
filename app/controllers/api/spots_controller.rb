class Api::SpotsController < ApplicationController

    def index
        spots = bounds ? Spot.in_bounds(bounds) : Spot.all
        @spots = spots.with_attached_photos

        render :index
    end 

    def show
        @spot = Spot.with_attached_photos.find(params[:id]) 
        render :show
    end 

    def spot_params
        params.require(:spot).permit(photos:[])
    end 

    def bounds
        params[:bounds]
    end

end