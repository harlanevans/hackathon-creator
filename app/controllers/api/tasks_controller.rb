class Api::TasksController < ApplicationController
  
  def index
    render json: Task.all 
  end

  def create
    task = Task.new(task_params)
    if task.save
      render json: task
    else
      render json:  {errors: task.errors }, status: :unprocessable_entity
    end
  end

  def update
    task = Task.find(params[:id])
    if task.update(task_params)
    render json: task
    else 
      render json: task.errors, status: 422
    end
  end

  def destroy
    Task.find(params[:id]).destroy
    render json: { message: 'Task Deleted' }
  end

  private

  def task_params
    params.require(:task).permit(:name,:complete,:staff)
  end


end
