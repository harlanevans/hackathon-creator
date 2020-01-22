class Group < ApplicationRecord
  belongs_to :event
  has_many :student_groups
  has_many :students, through: :student_groups
end
