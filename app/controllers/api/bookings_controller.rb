class Api::BookingsController < ApplicationController

    before_action :require_logged_in

    def index
        @bookings = current_user.bookings
        render :index
    end

    def show
        @booking = Booking.find(params[:id])
        render :show

    end

    def create
        @booking = current_user.bookings.new(booking_params)

        if @booking.save
            render :show
        else
            render json: @booking.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @booking = current_user.bookings.find(params[:id])

        if @booking.destroy
            render :show
        else
            render json: @booking.errors.full_messages, status: 422
        end
    end 

    private

    def booking_params
        params.require(:booking).permit(:check_in, :check_out, :spot_id, :total_price, :guest_number)
    end
end 