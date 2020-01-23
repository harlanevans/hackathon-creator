class Api::TimersController < ApplicationController
      before_action :set_event
  
    def index
      render json: @event.timers 
    end
  
    def create
      @timer = @event.timers.new(timer_params)
      if @timer.save
        render json: @timer
      else
        render json: @timer.errors, status: 422
      end
    end
  
    def update
      @timer = @event.timers.find(params[:id])
      if @timer.update(timer_params)
      render json: @timer
      else 
        render json: @timer.errors, status: 422
      end
    end
  
    def destroy
      @event.timers.find(params[:id]).destroy
      render json: { message: 'Timer Deleted' }
    end
  
    private
  
    def set_event
      @event = Event.find(params[:event_id])
    end
  
    def timer_params
      params.require(:timer).permit(:name, :start_time, :end_time, :complete)
    end
end
