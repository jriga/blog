Rails.application.routes.draw do
  resources :articles, only: [:create, :update, :delete, :index]
  root 'angular#index'
end
