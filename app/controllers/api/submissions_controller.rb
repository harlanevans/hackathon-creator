class Api::SubmissionsController < ApplicationController
  before_action :set_event

  # All admin - no students
  # Axios call here only on admin side. 
  
  def index
    render json: @event.submissions
  end

  def create
    @submission = @event.submissions.new(submission_params)
    if @submission.save
      render json: @submission
    else
      render json: @submission.errors, status: 422
    end
  end

  private

  def set_event
    @event = Event.find(params[:event_id])
  end

  def submission_params
    params.require(:submission).permit(:event_id, :group_name, :link)
  end

end
