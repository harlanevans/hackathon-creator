class Student < ApplicationRecord
  belongs_to :course
  has_many :student_groups, dependent: :destroy
  has_many :groups, through: :student_groups
end
