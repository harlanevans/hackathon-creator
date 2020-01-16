class Api::StudentsController < ApplicationController  
    before_action :set_course
  
    def index
      render json: @course.students 
    end
  
    def create
      @student = @course.students.new(student_params)
      if @student.save
        render json: @student
      else
        render json: @student.errors, status: 422
      end
    end
  
    def update
      @student = @course.students.find(params[:id])
      if @student.update(student_params)
      render json: @student
      else 
        render json: @student.errors, status: 422
      end
    end
  
    def destroy
      @course.students.find(params[:id]).destroy
      render json: { message: 'Student Deleted' }
    end
  
    private
  
    def set_course
      @course = Course.find(params[:course_id])
    end
  
    def student_params
      params.require(:student).permit(:course_id,:name,:skill_lvl,:effort_lvl)
    end
    

end
