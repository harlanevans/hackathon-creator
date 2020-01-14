Rails.application.routes.draw do
  # devise_for :users
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :users do
      resources :tasks
    end
    # custom route for student task
  end
end
