# frozen_string_literal: true

class User < ActiveRecord::Base
       extend Devise::Models

       # Include default devise modules. Others available are:
       # :confirmable, :lockable, :timeoutable and :omniauthable
       has_many :tasks, dependent: :destroy
       devise :database_authenticatable, :registerable,
               :recoverable, :rememberable, :trackable, :validatable
       include DeviseTokenAuth::Concerns::User
end
