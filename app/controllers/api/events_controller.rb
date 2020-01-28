class Api::EventsController < ApplicationController
  before_action :set_course

  def index
    render json: @course.events.order(created_at: :desc) 
  end

  def create
    @event = @course.events.new(event_params)
    if @event.save
      render json: @event
    else
      render json: @event.errors, status: 422
    end
  end

  def update
    @event = @course.events.find(params[:id])
    if @event.update(event_params)
    render json: @event
    else 
      render json: @event.errors, status: 422
    end
  end

  def destroy
    @course.events.find(params[:id]).destroy
    render json: { message: 'Event Deleted' }
  end

  private

  def set_course
    @course = Course.find(params[:course_id])
  end

  def event_params
    params.require(:event).permit(:course_id,:name,:rubric)
  end
end
