Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
  
    resources :timers

    resources :courses do
      resources :events do
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
  get '*other', to: 'static#index'
end
