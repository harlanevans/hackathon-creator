class Api::EventsController < ApplicationController
  before_action :set_course

  def index
    render json: @course.events 
  end

  def create
    @event = @course.tasks.new(event_params)
    if @event.save
      render json: @event
    else
      render json: @event.errors, status: 422
    end
  end

  def update
    @event = @course.tasks.find(params[:id])
    if @event.update(event_params)
    render json: @event
    else 
      render json: @event.errors, status: 422
    end
  end

  def destroy
    @course.tasks.find(params[:id]).destroy
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
