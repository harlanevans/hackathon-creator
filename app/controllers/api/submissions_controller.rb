class Api::SubmissionsController < ApplicationController
  before_action :set_event

  # All admin - no students
  # Axios call here only on admin side. 
  
  def index
    render json: @event.submissions
  end

  private

  def set_event
    @event = Event.find(params[:event_id])
  end

end
