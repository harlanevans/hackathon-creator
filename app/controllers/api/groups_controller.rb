class Api::GroupsController < ApplicationController
    before_action :set_event

  def index
    render json: @event.groups 
  end

  def create
    @group = @event.groups.new(group_params)
    if @group.save
      render json: @group
    else
      render json: @group.errors, status: 422
    end
  end

  def update
    @group = @event.groups.find(params[:id])
    if @group.update(group_params)
    render json: @group
    else 
      render json: @group.errors, status: 422
    end
  end

  def destroy
    @event.groups.find(params[:id]).destroy
    render json: { message: 'Group Deleted' }
  end

  private

  def set_event
    @event = Event.find(params[:event_id])
  end

  def group_params
    params.require(:group).permit(:event_id, :name)
  end

end
