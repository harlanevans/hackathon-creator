class Api::TasksController < ApplicationController
  
  before_action :set_user

  def index
    render json: @user.tasks 
  end

  def create
    @task = @user.tasks.new(task_params)
    if @task.save
      render json: @task
    else
      render json: @task.errors, status: 422
    end
  end

  def update
    @task = @user.tasks.find(params[:id])
    if @task.update(task_params)
    render json: @task
    else 
      render json: @task.errors, status: 422
    end
  end

  def destroy
    @user.tasks.find(params[:id]).destroy
    render json: { message: 'Task Deleted' }
  end

  private

  def set_user
    @user = User.find(params[:user_id])
  end

  def task_params
    params.require(:task).permit(:user_id,:name,:complete,:staff)
  end


end
