class Course < ApplicationRecord
  has_many :students, dependent: :destroy
  has_many :events, dependent: :destroy
end
