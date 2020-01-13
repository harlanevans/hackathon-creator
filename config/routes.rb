Rails.application.routes.draw do
  # devise_for :users
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
<<<<<<< HEAD
    resources :courses
=======
    resources :tasks
    # custom route for student task
>>>>>>> 2e10142ff9a2b21b178d0d84613976e8d77307e2
  end
end
