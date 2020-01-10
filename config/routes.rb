Rails.application.routes.draw do
  # devise_for :users
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :tasks
    # custom route for student task
  end
end
