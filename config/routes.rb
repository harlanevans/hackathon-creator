Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :courses do
      resources :events
    end
    resources :users do
      resources :tasks
    end
  end

end
