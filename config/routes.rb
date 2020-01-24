Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do

    resources :courses do
      resources :events do
        resources :timers
        resources :groups
      end
      resources :students
    end
    
    resources :events do
      resources :submissions
    end

    resources :users do
      resources :tasks
    end

    resources :groups do 
      resources :student_groups
    end

    resources :students do 
      resources :student_groups
    end
    
  end
end
