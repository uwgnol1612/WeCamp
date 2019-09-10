class Api::SpotsController < ApplicationController

    def index
        spots = bounds ? Spot.in_bounds(bounds) : Spot.all
       
        if price
            spots = spots.where('price < ?', price)
        end 

        if group_size
            spots = spots.where('max_capacity > ?', group_size)
        end

        if params[:pets]
            spots = spots.where('pets = ?', params[:pets])
        end
        
        if params[:toilet]
            spots = spots.where('pets = ?', params[:toilet])
        end 

        if params[:campfire]
            spots = spots.where('pets = ?', params[:campfire])
        end 

        if params[:water]
            spots = spots.where('pets = ?', params[:water])
        end 

        if params[:hiking]
            spots = spots.where('hiking = ?', params[:hiking])
        end 

        if params[:swimming]
            spots = spots.where('swimming = ?', params[:swimming])
        end 

        if params[:fishing]
            spots = spots.where('fishing = ?', params[:fishing])
        end 

        if params[:wildlife]
            spots = spots.where('wildlife = ?', params[:wildlife])
        end

        if params[:tent]
            spots = spots.where('tent = ?', params[:tent])
        end

        if params[:parking]
            spots = spots.where('parking = ?', params[:parking])
        end

        @spots = spots.with_attached_photos
        render :index
    end 

    def show
        @spot = Spot.with_attached_photos.find(params[:id]) 
        render :show
    end 

    def spot_params
        params.require(:spot).permit(:pets, :toilet,:campfire, :water, :groupSize, :price, photos:[])
    end 

    

    def bounds
        params[:bounds]
    end

    def price
        params[:price]
    end

    def group_size
        params[:groupSize]
    end 


end