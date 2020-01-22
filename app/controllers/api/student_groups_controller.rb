class Api::StudentGroupsController < ApplicationController
  before_action :set_group

  def index
    render json: @group.student_groups
  end

  def create
    @student_group = @group.student_groups.new(student_group_params)
    if @student_group.save
      render json: @student_group
    else
      render json: @student_group.errors, status: 422
    end
  end

  def update
    @student_group = @group.student_groups.find(params[:id])
    if @student_group.update(student_group_params)
      render json: @student_group
    else
      render json: @student_group.errors, status: 422
    end
  end

  def destroy
    @group.student_groups.find(params[:id]).destroy
    render json: { message: 'Student Group Deleted' }
  end

  private

  def set_group
    @group = Group.find(params[:group_id])
  end

  def student_group_params
    params.require(:student_group).permit(:group_id, :student_id)
  end

end
