class Api::CoursesController < ApplicationController
  
  def index
    render json: Course.all.order(created_at: :desc)
  end

  def create
    course = Course.new(course_params)
    if course.save
      render json: course
    else
      render json:  {errors: course.errors }, status: :unprocessable_entity
    end
  end

  def update
    course = Course.find(params[:id])
    if course.update(course_params)
    render json: course
    else 
      render json: course.errors, status: 422
    end
  end

  def destroy
    Course.find(params[:id]).destroy
    render json: { message: 'Course deleted' }
end

private

  def course_params
    params.require(:course).permit(:name)
  end

end
