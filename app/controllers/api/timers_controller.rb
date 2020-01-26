class Api::TimersController < ApplicationController  
    def index
      render json: Timer.all
    end
  
    def create
      @timer = Timer.new(timer_params)
      if @timer.save
        render json: @timer
      else
        render json: @timer.errors, status: 422
      end
    end
  
    def update
      @timer = TImer.find(params[:id])
      if @timer.update(timer_params)
      render json: @timer
      else 
        render json: @timer.errors, status: 422
      end
    end
  
    def destroy
      Timer.find(params[:id]).destroy
      render json: { message: 'Timer Deleted' }
    end
  
    private
  
    def timer_params
      params.require(:timer).permit(:name, :start_time, :end_time, :complete, :types, :active)
    end
end
