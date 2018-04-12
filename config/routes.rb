Rails.application.routes.draw do
  namespace :api do
    resources :mixtapes do
      resources :songs
      resources :comments
    end
  end
end
